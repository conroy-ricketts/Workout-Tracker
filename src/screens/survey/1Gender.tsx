import React from 'react';
import { Text, View } from 'react-native';
import SurveyBackground from './BackgroundComponent';
import Indicator from './IndicatorComponent';

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
    </SurveyBackground>
  );
}

