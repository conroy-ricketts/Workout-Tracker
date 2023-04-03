import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SurveyBackground from './BackgroundComponent';
import Indicator from './IndicatorComponent';
import Choices2 from '../../components/ChoicesButton2';

export default function Question5(): JSX.Element {
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
  const activeImage = images[4];

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
          activeIndex={4}
          count={8}
          images={images}
          activeImage={activeImage}
        />
      </View>
      <View style={{ marginTop: 0, paddingHorizontal: 45 }}>
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
      </View>
    </SurveyBackground>
  );
}