import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import SurveyBackground from './BackgroundComponent';
import Indicator from './IndicatorComponent';

export default function Question3(): JSX.Element {
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
  const activeImage = images[2];

  const [weight, setWeight] = useState('');

  return (
    <SurveyBackground>
      <View style={{ position: 'absolute'  }}>
        <Indicator
          activeIndex={2}
          count={8}
          images={images}
          activeImage={activeImage}
        />
      </View>
      <View style={{ marginTop:20 }}>
        <View style={{ alignItems: 'center'}}>
          <Text style={{ fontSize: 15, color: 'white', marginTop: -130}}>This helps us curate your workout plan</Text>
          <Text style={{ fontSize: 30,color: 'white', fontWeight: '600', marginTop:-70 }}>How much do you weigh?</Text>
        </View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 250, left: 85, paddingLeft: 10, backgroundColor: '#5BC0BE' }}
          onChangeText={text => setWeight(text)}
          value={weight}
          keyboardType='numeric'
          placeholder='Enter your weight (in lbs)'
          placeholderTextColor='gray'
        />
      </View>
    </SurveyBackground>
  );
}

