import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SurveyBackground from './BackgroundComponent'
import Indicator from './IndicatorComponent'
import { Picker } from '@react-native-picker/picker'
import { Dimensions } from 'react-native'
import SmallWidthRoundedButton from '../../components/SmallWidthRoundedButton'
import BackButton from '../../components/BackButton'
import { StackNavigationProp } from '@react-navigation/stack'
const screenHeight = Dimensions.get('screen').height
type RootStackParamList = {
    Question1: undefined;
    Question2: undefined;
    Question3: undefined;
  };
  type Question1ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Question1'
>;
  type Question2ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question2'
  >;
  
  type Question3ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question3'
  >;
  type Question1Props = {
    navigation: Question1ScreenNavigationProp;
  };
  type Question2Props = {
    navigation: Question2ScreenNavigationProp;
  };
  
  type Question3Props = {
    navigation: Question3ScreenNavigationProp;
  };
  type Question2NavigationProp = StackNavigationProp<RootStackParamList, 'Question2'>;
export default function Question2({ navigation }: { navigation: Question2NavigationProp }) {
    const images = [
        require('../../../assets/IndicatorImages/Indicator1.png'),
        require('../../../assets/IndicatorImages/Indicator2.png'),
        require('../../../assets/IndicatorImages/Indicator3.png'),
        require('../../../assets/IndicatorImages/Indicator4.png'),
        require('../../../assets/IndicatorImages/Indicator5.png'),
        require('../../../assets/IndicatorImages/Indicator6.png'),
        require('../../../assets/IndicatorImages/Indicator7.png'),
        require('../../../assets/IndicatorImages/Indicator8.png'),
    ]
    const activeImage = images[1]

    const [selectedAge, setSelectedAge] = useState<number>(0)

    const ageItems = []

    for (let i = 13; i < 90; i++) {
        ageItems.push({ label: i.toString(), value: i })
    }
  
  

    return (
        <SurveyBackground>
 
            <View style={styles.indicatorContainer}>
                <Indicator
                    activeIndex={1}
                    count={8}
                    images={images}
                    activeImage={activeImage}
                />
            </View>
            <View style={{ alignItems: 'center'}}>
                <Text style={styles.Subtitle}>This helps us curate your workout plan</Text>
                <Text style={styles.Header}>How old are you?</Text>
            </View>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedAge}
                    style={styles.picker}
                    onValueChange={(itemValue:number) => {
                        setSelectedAge(itemValue)
                    }}>
                    {ageItems.map((item) => (
                        <Picker.Item label={item.label} value={item.value} key={item.value} />
                    ))}
                </Picker>
                <View style={styles.NextButton}>
                    <SmallWidthRoundedButton title="Next" onPress={() => navigation.navigate('Question3')} />
                </View>
                <View style={styles.BackButton}>
                    <BackButton onPress={() => navigation.navigate('Question1')}/>
                </View>
            </View>
        </SurveyBackground>
    )
}

const styles = StyleSheet.create({
    indicatorContainer: {
        top: screenHeight<900? 33: 100
    },
    pickerContainer: {
        alignItems: 'center',
        top:-90,
    
    },
    picker: {
        width: 300,
        height: screenHeight<900? 50: 200,
        marginTop: screenHeight<900? 10: 50,
        backgroundColor: '#5BC0BE',
        borderRadius: 10
    },
    Subtitle:{
        fontSize: 15, 
        color: 'white', 
        marginTop: screenHeight<900? -180:-100
    },
    Header:{
        fontSize: 30,
        color: 'white', 
        fontWeight: '600', 
        marginTop:-90
    },
    NextButton:{
        position: 'absolute', 
        bottom: screenHeight<900? -427:-327, 
        right: 30
    },
    BackButton:{
        position: 'absolute', 
        top:screenHeight<900? -247: -177, 
        right: 375
    }
})
