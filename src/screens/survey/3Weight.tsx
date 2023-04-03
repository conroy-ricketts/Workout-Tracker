import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import SurveyBackground from './BackgroundComponent';
import Indicator from './IndicatorComponent';
import SmallWidthRoundedButton from '../../components/SmallWidthRoundedButton';
import BackButton from '../../components/BackButton';
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
    Question2: undefined;
    Question3: undefined;
    Question4: undefined;
  };
  type Question2ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Question2'
>;
  type Question3ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question3'
  >;
  
  type Question4ScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Question4'
  >;
  type Question2Props = {
    navigation: Question2ScreenNavigationProp;
  };
  type Question3Props = {
    navigation: Question3ScreenNavigationProp;
  };
  
  type Question4Props = {
    navigation: Question4ScreenNavigationProp;
  };
  type Question2NavigationProp = StackNavigationProp<RootStackParamList, 'Question3'>;
export default function Question3({ navigation }: { navigation: Question2NavigationProp }) {
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
          <Text style={{ fontSize: 15, color: 'white', marginTop: -180}}>This helps us curate your workout plan</Text>
          <Text style={{ fontSize: 30,color: 'white', fontWeight: '600', marginTop:-90 }}>How much do you weigh?</Text>
        </View>
        <TextInput
          style={{ height: 60, borderColor: 'gray', borderWidth: 0, width: 300, left: 60, paddingLeft: 10, backgroundColor: '#5BC0BE',fontSize: 18,top:-90 }}
          onChangeText={text => setWeight(text)}
          value={weight}
          keyboardType='numeric'
          placeholder='Enter your weight (in lbs)'
          placeholderTextColor='gray'
        />
        <View style={{position: 'absolute', bottom: -327, right: 30 }}>
          <SmallWidthRoundedButton title="Next" onPress={() => navigation.navigate('Question4')} />
        </View>
        <View style={{position: 'absolute', top:-350, right: 375 }}>
          <BackButton onPress={() => navigation.navigate('Question2')}/>
        </View>
      </View>
    </SurveyBackground>
  );
}


