import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SurveyBackground from './BackgroundComponent';
import Indicator from './IndicatorComponent';
import Choices from '../../components/ChoicesButton';

export default function Question1(): JSX.Element {
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
  const activeImage = images[0];

  const [femaleSelected, setFemaleSelected] = useState(false);
  const [maleSelected, setMaleSelected] = useState(false);
  const [nonBinarySelected, setNonBinarySelected] = useState(false);
  const [preferNotToSaySelected, setPreferNotToSaySelected] = useState(false);

  const handleFemalePress = () => {
    setFemaleSelected(true);
    setMaleSelected(false);
    setNonBinarySelected(false);
    setPreferNotToSaySelected(false);
  };

  const handleMalePress = () => {
    setFemaleSelected(false);
    setMaleSelected(true);
    setNonBinarySelected(false);
    setPreferNotToSaySelected(false);
  };

  const handleNonBinaryPress = () => {
    setFemaleSelected(false);
    setMaleSelected(false);
    setNonBinarySelected(true);
    setPreferNotToSaySelected(false);
  };

  const handlePreferNotToSayPress = () => {
    setFemaleSelected(false);
    setMaleSelected(false);
    setNonBinarySelected(false);
    setPreferNotToSaySelected(true);
  };

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
      <View style={{ marginTop: 0, paddingHorizontal: 45 }}>
        <Text style={{ fontSize: 40, fontWeight: '600', color:'white', textAlign: 'center', marginBottom: 20 }}>Tell Us About Yourself!</Text>
        <Text style={{ fontSize: 15, fontWeight: '400',color:'white', textAlign: 'center', marginBottom: 20 }}>To give you a better experience, what gender do you identify with?</Text>
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
      </View>
    </SurveyBackground>
  );
}


