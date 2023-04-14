import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SurveyBackground from './BackgroundComponent'
import Indicator from './IndicatorComponent'
import Choices from '../../components/ChoicesButton'
import SmallWidthRoundedButton from '../../components/SmallWidthRoundedButton'
import BackButton from '../../components/BackButton'
import { StackNavigationProp } from '@react-navigation/stack'

type RootStackParamList = {
  Question1: undefined;
  Question2: undefined;
  OnboardingScreen: undefined;
};
type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'OnboardingScreen'
>;

type Question1ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Question1'
>;

type Question2ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Question2'
>;
type OnboardingProps = {
    navigation: OnboardingScreenNavigationProp;
  };

type Question1Props = {
  navigation: Question1ScreenNavigationProp;
};

type Question2Props = {
  navigation: Question2ScreenNavigationProp;
};
type Question1NavigationProp = StackNavigationProp<RootStackParamList, 'Question1'>;

export default function Question1({ navigation }: { navigation: Question1NavigationProp }) {
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
    const activeImage = images[0]


    const [femaleSelected, setFemaleSelected] = useState(false)
    const [maleSelected, setMaleSelected] = useState(false)
    const [nonBinarySelected, setNonBinarySelected] = useState(false)
    const [preferNotToSaySelected, setPreferNotToSaySelected] = useState(false)

    const handleFemalePress = () => {
        setFemaleSelected(true)
        setMaleSelected(false)
        setNonBinarySelected(false)
        setPreferNotToSaySelected(false)
    }

    const handleMalePress = () => {
        setFemaleSelected(false)
        setMaleSelected(true)
        setNonBinarySelected(false)
        setPreferNotToSaySelected(false)
    }

    const handleNonBinaryPress = () => {
        setFemaleSelected(false)
        setMaleSelected(false)
        setNonBinarySelected(true)
        setPreferNotToSaySelected(false)
    }

    const handlePreferNotToSayPress = () => {
        setFemaleSelected(false)
        setMaleSelected(false)
        setNonBinarySelected(false)
        setPreferNotToSaySelected(true)
    }

    return (
        <SurveyBackground>
            <View style={{ position: 'absolute' }}>
                <Indicator
                    activeIndex={0}
                    count={8}
                    images={images}
                    activeImage={activeImage}
                />
            </View>
            <View style={{ marginTop: -90, paddingHorizontal: 45 }}>
                <Text style={{ fontSize: 30, fontWeight: '600', color:'white', textAlign: 'center', marginBottom: 20 }}>Tell Us About Yourself!</Text>
                <Text style={{ fontSize: 15, fontWeight: '400',color:'white', textAlign: 'center', marginBottom: 50 }}>To give you a better experience, what gender do you identify with?</Text>
                <Choices
                    title="Female"
                    onPress={handleFemalePress}
                    isSelected={femaleSelected}
                />
                <Choices
                    title="Male"
                    onPress={handleMalePress}
                    isSelected={maleSelected}
                />
                <Choices
                    title="Non-Binary"
                    onPress={handleNonBinaryPress}
                    isSelected={nonBinarySelected}
                />
                <Choices
                    title="Prefer not to say"
                    onPress={handlePreferNotToSayPress}
                    isSelected={preferNotToSaySelected}
                />

                <View style={{position: 'absolute', bottom: -180, right: 30 }}>
                    <SmallWidthRoundedButton title="Next" onPress={() => navigation.navigate('Question2')} />
                </View>
                <View style={{position: 'absolute', top:-97, right: 375 }}>
                    <BackButton onPress={() => navigation.navigate('OnboardingScreen')}/>
                </View>
            </View>
        </SurveyBackground>
    )
}



