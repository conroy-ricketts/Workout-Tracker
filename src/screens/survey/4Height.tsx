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
    Question3: undefined;
    Question4: undefined;
    Question5: undefined;
  };
  type Question3ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question3'
  >;
  type Question4ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question4'
  >;
  
  type Question5ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question5'
  >;
  type Question3Props = {
    navigation: Question3ScreenNavigationProp;
  };
  type Question4Props = {
    navigation: Question4ScreenNavigationProp;
  };
  
  type Question5Props = {
    navigation: Question5ScreenNavigationProp;
  };
  type Question4NavigationProp = StackNavigationProp<RootStackParamList, 'Question4'>;
export default function Question4({ navigation }: { navigation: Question4NavigationProp }) {
    const images = [
        require('../../../assets/indicatorImages/Indicator1.png'),
        require('../../../assets/indicatorImages/Indicator2.png'),
        require('../../../assets/indicatorImages/Indicator3.png'),
        require('../../../assets/indicatorImages/Indicator4.png'),
        require('../../../assets/indicatorImages/Indicator5.png'),
        require('../../../assets/indicatorImages/Indicator6.png'),
        require('../../../assets/indicatorImages/Indicator7.png'),
        require('../../../assets/indicatorImages/Indicator8.png'),
    ]
    const activeImage = images[3]

    const [selectedFeet, setSelectedFeet] = useState<number>(0)
    const [selectedInches, setSelectedInches] = useState<number>(0)

    const feetItems = [
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7', value: 7 },
    ]

    const inchesItems = [
        { label: '0', value: 0 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7', value: 7 },
        { label: '8', value: 8 },
        { label: '9', value: 9 },
        { label: '10', value: 10 },
        { label: '11', value: 11 },
    ]

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
                <Text style={styles.Header}>What is your height?</Text>
            </View>
            <View style={styles.iosVersion}>
                <View style={styles.pickerContainer}>
                    <View >
                        <Picker
                            selectedValue={selectedFeet}
                            style={styles.picker}
                            onValueChange={(itemValue: number, itemIndex: number) => {
                                setSelectedFeet(itemValue)
                            }}
                        >
                            {feetItems.map((item) => (
                                <Picker.Item
                                    label={item.label + ' ft'}
                                    value={item.value}
                                    key={item.value}
                                />
                            ))}
                        </Picker>
                    </View>
                </View>
                <View style={styles.iosVersion}>
                    <View style={styles.pickerContainer}>
                        <View >
                            <Picker
                                selectedValue={selectedInches}
                                style={styles.picker}
                                onValueChange={(itemValue: number, itemIndex: number) => {
                                    setSelectedInches(itemValue)
                                }}
                            >
                                {inchesItems.map((item) => (
                                    <Picker.Item
                                        label={item.label + ' in'}
                                        value={item.value}
                                        key={item.value}
                                    />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </View>
                <View style={styles.NextButton}>
                    <SmallWidthRoundedButton title="Next" onPress={() => navigation.navigate('Question5')} />
                </View>
                <View style={styles.BackButton}>
                    <BackButton onPress={() => navigation.navigate('Question3')}/>
                </View>
            </View>
        </SurveyBackground>
    )
}

const styles = StyleSheet.create({
    indicatorContainer: {
        top:62
    },
    pickerContainer: {
        alignItems: 'center',
        top:screenHeight<900? -90: 0
    },
    picker: {
        width: screenHeight<900? 300: 200,
        height: screenHeight<900? 50: 200,
        borderRadius: screenHeight<900? 10: 50,
        marginTop: 10,
        backgroundColor: '#5BC0BE',
    },
    iosVersion:{
        flexDirection: screenHeight<900? 'column': 'row',
        marginHorizontal: screenHeight<900? 0:10,
    },
    Subtitle:{
        fontSize: 15, 
        color: 'white', 
        marginTop: screenHeight<900? -180:-140
    },
    Header:{
        fontSize: 30,
        color: 'white', 
        fontWeight: '600', 
        marginTop:-70
    },
    NextButton:{
        position: 'absolute', 
        bottom: screenHeight<900? -303:-265, 
        right: 30
    },
    BackButton:{
        position: 'absolute', 
        top:-307, 
        right: 375
    }
})