import React, { useState, useMemo } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native'
import { Avatar, Button } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import SwitchScreensButton from '../../components/StatsButton'
import { StackNavigationProp } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import { AppColors } from '../../resources/AppColors'
const { width, height } = Dimensions.get('window')
type RootStackParamList = {
    PictureAlbum: undefined;
    StatsScreen: undefined;
  };
  
  type PictureAlbumScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'PictureAlbum'
  >;
  
  type StatsScreenScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'StatsScreen'
  >;
  
  type PictureAlbumProps = {
    navigation: PictureAlbumScreenNavigationProp;
  };
  
  type StatsScreenProps = {
    navigation: StatsScreenScreenNavigationProp;
  };
  type PictureAlbumNavigationProp = StackNavigationProp<RootStackParamList, 'PictureAlbum'>;
  
interface Photo {
  id: number;
  image: { uri: string } | null;
}

export default function PictureAlbum({ navigation }: { navigation: PictureAlbumNavigationProp }) {
    const [photos, setPhotos] = useState<Photo[]>([{ id: 1, image: null }])
    useFonts({'Michroma-Regular': require('../../../assets/fonts/Michroma-Regular.ttf')})

    const createPhotos = useMemo(() => {
        const defaultCard = photos.filter((photo, index) => (index === 0 && !photo.image ? null : photo)) 
  
        if (defaultCard.length === 0) {
            return (
                <View style={styles.Photo} key={0}>
                    <Avatar.Icon icon="camera" size={250} style={styles.CardImage} />
                </View>
            )
        }
  
        return defaultCard
            .slice()
            .reverse()
            .map((photo) => (
                <View style={styles.Photo} key={photo.id}>
                    {photo.image ? (
                        <Image source={photo.image} style={styles.CardImage} resizeMode="cover"/>
                    ) : (
                        <Avatar.Icon icon="camera" size={250} style={styles.CardImage} />
                    )}
                    <Text style={styles.Text}>Progress Check #{photo.id - 1}</Text>
                </View>
            ))
    }, [photos])
  
    const handleAddPhoto = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!')
            return
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        })

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const { uri } = result.assets[0]
            const newPhoto: Photo = { id: photos.length + 1, image: { uri } }
            setPhotos([...photos, newPhoto])
        }
    }

    const handleUpdateCardImage = async (id: number) => {

        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!')
            return
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        })

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const { uri } = result.assets[0]

            const updatedPhotos = [...photos]
            updatedPhotos[id] = { ...updatedPhotos[id], image: { uri } }
            setPhotos(updatedPhotos)
        }
    }
    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.appTitleContainer}>
                {/* <Image source={require('../../../assets/Fit4U(WhiteLOGO).png')} style={styles.appTitle} /> */}
                <Text style={{textAlign: 'center', fontStyle: 'normal', fontFamily: 'Michroma-Regular', fontWeight: '400', fontSize: 48, color: AppColors.White}}>
                    {'Fit 4 U'}
                </Text>
            </View>
            <View style={styles.mainContainer}>
                <ScrollView
                    horizontal={true}
                    contentContainerStyle={styles.PhotoContainer}
                >
                    {createPhotos}
                </ScrollView>
            </View>
            <View style={styles.AddPhotoContainer}>
                <Button icon="camera" mode="elevated" onPress={handleAddPhoto} labelStyle={{ color: 'black' }}>
          Take Progress Picture
                </Button>
            </View>
            <View style={styles.ButtonContainer}>
                <SwitchScreensButton onPress={() => navigation.navigate('StatsScreen')} />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#0B132B',
    },
    appTitle: {
        width: width * 0.48,
        height: height * 0.077,
        resizeMode: 'contain',
    },
    appTitleContainer: {
        position: 'absolute',
        top: height < 900 ? height * 0.0369 : height * 0.054,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
    mainContainer: {
        position: 'absolute',
        top: height < 900 ? 100 : 70,
        left: 0, 
        flexDirection: 'row',
        width: '100%',
        height: height < 900 ? 600 : 680,
    },
    PhotoContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        paddingHorizontal: height<900? 60:70,
    },
    Photo: {
        width: 301,
        height: height<900? 569:599,
        borderRadius: 40,
        borderWidth: 9,
        backgroundColor: '#3A506B',
        borderColor: '#1C2541',
        alignSelf: 'center',
        marginRight: 25,
        marginBottom: -10
    },
    AddPhotoContainer: {
        position: 'absolute',
        top: height < 900 ? 710 : 770,
        right: 100,
    },
    Text: {
        position:'absolute',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff',
        top: height<900? 490:520,
        left: 32,
        zIndex:2
    },
    CardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
        backgroundColor:'#3A506B'
    },
    ButtonContainer:{
        paddingTop: 60,
        left:height<900? 20:20,
        zIndex:3
    }
})



