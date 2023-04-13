import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SurveyBackground from './BackgroundComponent'
import Indicator from './IndicatorComponent'
import Choices from '../../components/ChoicesButton'
import SmallWidthRoundedButton from '../../components/SmallWidthRoundedButton'
import BackButton from '../../components/BackButton'
import { StackNavigationProp } from '@react-navigation/stack'
type RootStackParamList = {
    Question6: undefined;
    Question7: undefined;
    Question8: undefined;
  };
  type Question6ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question6'
  >;
  type Question7ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question7'
  >;
  
  type Question8ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question8'
  >;
  type Question6Props = {
    navigation: Question6ScreenNavigationProp;
  };
  type Question7Props = {
    navigation: Question7ScreenNavigationProp;
  };
  
  type Question8Props = {
    navigation: Question8ScreenNavigationProp;
  };
  type Question7NavigationProp = StackNavigationProp<RootStackParamList, 'Question7'>;
export default function Question7({ navigation }: { navigation: Question7NavigationProp }) {
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
    const activeImage = images[6]

    const [Choice1Selected, setChoice1Selected] = useState(false)
    const [Choice2Selected, setChoice2Selected] = useState(false)
    const [Choice3Selected, setChoice3Selected] = useState(false)
    const [Choice4Selected, setChoice4Selected] = useState(false)

    const handleChoice1Press = () => {
        setChoice1Selected(true)
        setChoice2Selected(false)
        setChoice3Selected(false)
        setChoice4Selected(false)
    }

    const handleChoice2Press = () => {
        setChoice1Selected(false)
        setChoice2Selected(true)
        setChoice3Selected(false)
        setChoice4Selected(false)
    }

    const handleChoice3Press = () => {
        setChoice1Selected(false)
        setChoice2Selected(false)
        setChoice3Selected(true)
        setChoice4Selected(false)
    }

    const handleChoice4Press = () => {
        setChoice1Selected(false)
        setChoice2Selected(false)
        setChoice3Selected(false)
        setChoice4Selected(true)
    }
    
    return (
        <SurveyBackground>
            <View style={{ position: 'absolute' }}>
                <Indicator
                    activeIndex={6}
                    count={8}
                    images={images}
                    activeImage={activeImage}
                />
            </View>
            <View style={{ marginTop: -110, paddingHorizontal: 45 }}>
                <Text style={{ fontSize: 25, fontWeight: '600', color:'white', textAlign: 'center', marginBottom: 15 }}>What was preventing you from achieving your fitness goals in the past?</Text>
                <Text style={{ fontSize: 15, fontWeight: '400',color:'white', textAlign: 'center', marginBottom: 15}}>This helps us curate your personalized workout plan</Text>
                <Choices
                    title="Didn’t fit my lifestyle"
                    onPress={handleChoice1Press}
                    isSelected={Choice1Selected}
                />
                <Choices
                    title="Health struggles"
                    onPress={handleChoice2Press}
                    isSelected={Choice2Selected}
                />
                <Choices
                    title="Lost Motivation"
                    onPress={handleChoice3Press}
                    isSelected={Choice3Selected}
                />
                <Choices
                    title="Other"
                    onPress={handleChoice4Press}
                    isSelected={Choice4Selected}
                />
                <View style={{position: 'absolute', bottom: -197, right: 30 }}>
                    <SmallWidthRoundedButton title="Next" onPress={() => navigation.navigate('Question8')} />
                </View>
                <View style={{position: 'absolute', top: -80, right: 375 }}>
                    <BackButton onPress={() => navigation.navigate('Question6')}/>
                </View>
            </View>
        </SurveyBackground>
    )
}