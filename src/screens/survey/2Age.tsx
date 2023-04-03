import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SurveyBackground from './BackgroundComponent';
import Indicator from './IndicatorComponent';
import { Picker } from '@react-native-picker/picker';

export default function Question2(): JSX.Element {
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
  const activeImage = images[1];

  const [selectedAge, setSelectedAge] = useState<number>(0);

  const ageItems = [
    { label: '19 or younger', value: 19 },
    { label: '20-29', value: 29 },
    { label: '30-39', value: 39 },
    { label: '40-49', value: 49 },
    { label: '50-59', value: 59 },
    { label: '60-69', value: 69 },
    { label: '70-79', value: 79 },
    { label: '80-89', value: 89 },
    { label: '89 or older', value: 90 },
  ];

  return (
    <SurveyBackground>
 
        <View style={styles.indicatorContainer}>
          <Indicator
            activeIndex={1}
            count={8}
            images={images}
            activeImage={activeImage}
          />
        </View>
        <View style={{ alignItems: 'center'}}>
          <Text style={{ fontSize: 15, color: 'white', marginTop: -130}}>This helps us curate your workout plan</Text>
          <Text style={{ fontSize: 30,color: 'white', fontWeight: '600', marginTop:-70 }}>How old are you?</Text>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedAge}
            style={styles.picker}
            onValueChange={(itemValue:number, itemIndex:number) => {
              setSelectedAge(itemValue);
            }}>
            {ageItems.map((item) => (
              <Picker.Item label={item.label} value={item.value} key={item.value} />
            ))}
          </Picker>
        </View>
    </SurveyBackground>
  );
}

const styles = StyleSheet.create({
  indicatorContainer: {
    top: 33
  },
  pickerContainer: {
    alignItems: 'center',
  },
  picker: {
    width: 300,
    height: 50,
    marginTop: 10,
    backgroundColor: '#5BC0BE',
  },
});
