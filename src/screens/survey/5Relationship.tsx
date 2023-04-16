import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SurveyBackground from './BackgroundComponent'
import Indicator from './IndicatorComponent'
import Choices2 from '../../components/ChoicesButton2'
import SmallWidthRoundedButton from '../../components/SmallWidthRoundedButton'
import BackButton from '../../components/BackButton'
import { StackNavigationProp } from '@react-navigation/stack'
type RootStackParamList = {
    Question4: undefined;
    Question5: undefined;
    Question6: undefined;
  };
  type Question4ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question4'
  >;
  type Question5ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question5'
  >;
  
  type Question6ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question6'
  >;
  type Question4Props = {
    navigation: Question4ScreenNavigationProp;
  };
  type Question5Props = {
    navigation: Question5ScreenNavigationProp;
  };
  
  type Question6Props = {
    navigation: Question6ScreenNavigationProp;
  };

  export let selectedChoice = 1;

  type Question5NavigationProp = StackNavigationProp<RootStackParamList, 'Question5'>;
export default function Question5({ navigation }: { navigation: Question5NavigationProp }) {
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
    const activeImage = images[4]

    const [Choice1Selected, setChoice1Selected] = useState(false)
    const [Choice2Selected, setChoice2Selected] = useState(false)
    const [Choice3Selected, setChoice3Selected] = useState(false)
    const [Choice4Selected, setChoice4Selected] = useState(false)

    const handleChoice1Press = () => {
        selectedChoice = 1
        setChoice1Selected(true)
        setChoice2Selected(false)
        setChoice3Selected(false)
        setChoice4Selected(false)
    }

    const handleChoice2Press = () => {
        selectedChoice = 1
        setChoice1Selected(false)
        setChoice2Selected(true)
        setChoice3Selected(false)
        setChoice4Selected(false)
    }

    const handleChoice3Press = () => {
        selectedChoice = 2
        setChoice1Selected(false)
        setChoice2Selected(false)
        setChoice3Selected(true)
        setChoice4Selected(false)
    }

    const handleChoice4Press = () => {
        selectedChoice = 3
        setChoice1Selected(false)
        setChoice2Selected(false)
        setChoice3Selected(false)
        setChoice4Selected(true)
    }
    
    return (
        <SurveyBackground>
            <View style={{ position: 'absolute' }}>
                <Indicator
                    activeIndex={4}
                    count={8}
                    images={images}
                    activeImage={activeImage}
                />
            </View>
            <View style={{ marginTop: -60, paddingHorizontal: 45 }}>
                <Text style={{ fontSize: 25, fontWeight: '600', color:'white', textAlign: 'center', marginBottom: 20 }}>How would you categorize your relationship with fitness?</Text>
                <Text style={{ fontSize: 15, fontWeight: '400',color:'white', textAlign: 'center', marginBottom: 20 }}>This helps us curate your personalized workout plan</Text>
                <Choices2
                    title="Brand new to working out"
                    onPress={handleChoice1Press}
                    isSelected={Choice1Selected}
                />
                <Choices2
                    title="Worked out in the past and want to get back into it"
                    onPress={handleChoice2Press}
                    isSelected={Choice2Selected}
                    addHeight={true}
                />
                <Choices2
                    title="Currently work out"
                    onPress={handleChoice3Press}
                    isSelected={Choice3Selected}
                />

                <Choices2
                    title="Obsessed with fitness"
                    onPress={handleChoice4Press}
                    isSelected={Choice4Selected}
                />
                <View style={{position: 'absolute', bottom: -147, right: 30 }}>
                    <SmallWidthRoundedButton title="Next" onPress={() => navigation.navigate('Question6')} />
                </View>
                <View style={{position: 'absolute', top:-85, right: 375 }}>
                    <BackButton onPress={() => navigation.navigate('Question4')}/>
                </View>
            </View>
        </SurveyBackground>
    )
}