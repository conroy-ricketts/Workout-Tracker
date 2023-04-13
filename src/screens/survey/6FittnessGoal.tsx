import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SurveyBackground from './BackgroundComponent'
import Indicator from './IndicatorComponent'
import Choices from '../../components/ChoicesButton'
import SmallWidthRoundedButton from '../../components/SmallWidthRoundedButton'
import BackButton from '../../components/BackButton'
import { Dimensions } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

const screenHeight = Dimensions.get('screen').height
type RootStackParamList = {
    Question5: undefined;
    Question6: undefined;
    Question7: undefined;
  };
  type Question5ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question5'
  >;
  type Question6ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question6'
  >;
  
  type Question7ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question7'
  >;
  type Question5Props = {
    navigation: Question5ScreenNavigationProp;
  };
  type Question6Props = {
    navigation: Question6ScreenNavigationProp;
  };
  
  type Question7Props = {
    navigation: Question7ScreenNavigationProp;
  };
  type Question6NavigationProp = StackNavigationProp<RootStackParamList, 'Question6'>;
export default function Question6({ navigation }: { navigation: Question6NavigationProp }) {
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
    const activeImage = images[5]

    const [Choice1Selected, setChoice1Selected] = useState(false)
    const [Choice2Selected, setChoice2Selected] = useState(false)
    const [Choice3Selected, setChoice3Selected] = useState(false)
    const [Choice4Selected, setChoice4Selected] = useState(false)
    const [Choice5Selected, setChoice5Selected] = useState(false)
    const [Choice6Selected, setChoice6Selected] = useState(false)
    const handleChoice1Press = () => {
        setChoice1Selected(true)
        setChoice2Selected(false)
        setChoice3Selected(false)
        setChoice4Selected(false)
        setChoice5Selected(false)
        setChoice6Selected(false)
    }

    const handleChoice2Press = () => {
        setChoice1Selected(false)
        setChoice2Selected(true)
        setChoice3Selected(false)
        setChoice4Selected(false)
        setChoice5Selected(false)
        setChoice6Selected(false)
    }

    const handleChoice3Press = () => {
        setChoice1Selected(false)
        setChoice2Selected(false)
        setChoice3Selected(true)
        setChoice4Selected(false)
        setChoice5Selected(false)
        setChoice6Selected(false)
    }

    const handleChoice4Press = () => {
        setChoice1Selected(false)
        setChoice2Selected(false)
        setChoice3Selected(false)
        setChoice4Selected(true)
        setChoice5Selected(false)
        setChoice6Selected(false)
    }
    const handleChoice5Press = () => {
        setChoice1Selected(false)
        setChoice2Selected(false)
        setChoice3Selected(false)
        setChoice4Selected(false)
        setChoice5Selected(true)
        setChoice6Selected(false)
    }
    const handleChoice6Press = () => {
        setChoice1Selected(false)
        setChoice2Selected(false)
        setChoice3Selected(false)
        setChoice4Selected(false)
        setChoice5Selected(false)
        setChoice6Selected(true)
    }
    
    return (
        <SurveyBackground>
            <View style={{ position: 'absolute' }}>
                <Indicator
                    activeIndex={5}
                    count={8}
                    images={images}
                    activeImage={activeImage}
                />
            </View>
            <View style={{ marginTop: 0, paddingHorizontal: 45 }}>
                <Text style={{ fontSize: 25, fontWeight: '600', color:'white', textAlign: 'center', marginBottom: 15 }}>What’s your top fitness goal?</Text>
                <Text style={{ fontSize: 15, fontWeight: '400',color:'white', textAlign: 'center', marginBottom: 10}}>This helps us curate your personalized workout plan</Text>
                <Choices
                    title="Lose weight"
                    onPress={handleChoice1Press}
                    isSelected={Choice1Selected}
                />
                <Choices
                    title="Get toned"
                    onPress={handleChoice2Press}
                    isSelected={Choice2Selected}
                />
                <Choices
                    title="Increase muscle mass"
                    onPress={handleChoice3Press}
                    isSelected={Choice3Selected}
                />
                <Choices
                    title="Improve health and wellness"
                    onPress={handleChoice4Press}
                    isSelected={Choice4Selected}
                />
                <Choices
                    title="Improve sports performance"
                    onPress={handleChoice5Press}
                    isSelected={Choice5Selected}
                />
                <Choices
                    title="I'm not sure"
                    onPress={handleChoice6Press}
                    isSelected={Choice6Selected}
                />
                <View style={{position: 'absolute', bottom: -97, right: 30 }}>
                    <SmallWidthRoundedButton title="Next" onPress={() => navigation.navigate('Question7')} />
                </View>
                <View style={{position: 'absolute', top: screenHeight<900? -75:-90, right: 375 }}>
                    <BackButton onPress={() => navigation.navigate('Question5')}/>
                </View>
            </View>
        </SurveyBackground>
    )
}