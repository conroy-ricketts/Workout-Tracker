import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SurveyBackground from './BackgroundComponent';
import Indicator from './IndicatorComponent';
import Choices from '../../components/ChoicesButton';

export default function Question6(): JSX.Element {
  const images = [
    require('../../../assets/IndicatorImages/Indicator1.png'),
    require('../../../assets/IndicatorImages/Indicator2.png'),
    require('../../../assets/IndicatorImages/Indicator3.png'),
    require('../../../assets/IndicatorImages/Indicator4.png'),
    require('../../../assets/IndicatorImages/Indicator5.png'),
    require('../../../assets/IndicatorImages/Indicator6.png'),
    require('../../../assets/IndicatorImages/Indicator7.png'),
    require('../../../assets/IndicatorImages/Indicator8.png'),
  ];
  const activeImage = images[5];

  const [Choice1Selected, setChoice1Selected] = useState(false);
  const [Choice2Selected, setChoice2Selected] = useState(false);
  const [Choice3Selected, setChoice3Selected] = useState(false);
  const [Choice4Selected, setChoice4Selected] = useState(false);
  const [Choice5Selected, setChoice5Selected] = useState(false);
  const [Choice6Selected, setChoice6Selected] = useState(false);
  const handleChoice1Press = () => {
    setChoice1Selected(true);
    setChoice2Selected(false);
    setChoice3Selected(false);
    setChoice4Selected(false);
    setChoice5Selected(false);
    setChoice6Selected(false);
  };

  const handleChoice2Press = () => {
    setChoice1Selected(false);
    setChoice2Selected(true);
    setChoice3Selected(false);
    setChoice4Selected(false);
    setChoice5Selected(false);
    setChoice6Selected(false);
  };

  const handleChoice3Press = () => {
    setChoice1Selected(false);
    setChoice2Selected(false);
    setChoice3Selected(true);
    setChoice4Selected(false);
    setChoice5Selected(false);
    setChoice6Selected(false);
  };

  const handleChoice4Press = () => {
    setChoice1Selected(false);
    setChoice2Selected(false);
    setChoice3Selected(false);
    setChoice4Selected(true);
    setChoice5Selected(false);
    setChoice6Selected(false);
  };
  const handleChoice5Press = () => {
    setChoice1Selected(false);
    setChoice2Selected(false);
    setChoice3Selected(false);
    setChoice4Selected(false);
    setChoice5Selected(true);
    setChoice6Selected(false);
  };
  const handleChoice6Press = () => {
    setChoice1Selected(false);
    setChoice2Selected(false);
    setChoice3Selected(false);
    setChoice4Selected(false);
    setChoice5Selected(false);
    setChoice6Selected(true);
  };
    
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
      <View style={{ marginTop: 5, paddingHorizontal: 45 }}>
        <Text style={{ fontSize: 25, fontWeight: '600', color:'white', textAlign: 'center', marginBottom: 15 }}>What’s your top fitness goal?</Text>
        <Text style={{ fontSize: 15, fontWeight: '400',color:'white', textAlign: 'center', marginBottom: 0}}>This helps us curate your personalized workout plan</Text>
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
      </View>
    </SurveyBackground>
  );
}