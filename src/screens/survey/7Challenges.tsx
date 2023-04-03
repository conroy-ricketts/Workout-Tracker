import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SurveyBackground from './BackgroundComponent';
import Indicator from './IndicatorComponent';
import Choices from '../../components/ChoicesButton';

export default function Question7(): JSX.Element {
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
  const activeImage = images[6];

  const [Choice1Selected, setChoice1Selected] = useState(false);
  const [Choice2Selected, setChoice2Selected] = useState(false);
  const [Choice3Selected, setChoice3Selected] = useState(false);
  const [Choice4Selected, setChoice4Selected] = useState(false);

  const handleChoice1Press = () => {
    setChoice1Selected(true);
    setChoice2Selected(false);
    setChoice3Selected(false);
    setChoice4Selected(false);
  };

  const handleChoice2Press = () => {
    setChoice1Selected(false);
    setChoice2Selected(true);
    setChoice3Selected(false);
    setChoice4Selected(false);
  };

  const handleChoice3Press = () => {
    setChoice1Selected(false);
    setChoice2Selected(false);
    setChoice3Selected(true);
    setChoice4Selected(false);
  };

  const handleChoice4Press = () => {
    setChoice1Selected(false);
    setChoice2Selected(false);
    setChoice3Selected(false);
    setChoice4Selected(true);
  };
    
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
      <View style={{ marginTop: 0, paddingHorizontal: 45 }}>
        <Text style={{ fontSize: 25, fontWeight: '600', color:'white', textAlign: 'center', marginBottom: 15 }}>What was preventing you from achieving your fitness goals in the past?</Text>
        <Text style={{ fontSize: 15, fontWeight: '400',color:'white', textAlign: 'center', marginBottom: 0}}>This helps us curate your personalized workout plan</Text>
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
      </View>
    </SurveyBackground>
  );
}