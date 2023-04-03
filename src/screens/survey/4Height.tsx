import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SurveyBackground from './BackgroundComponent';
import Indicator from './IndicatorComponent';
import { Picker } from '@react-native-picker/picker';

export default function Question4(): JSX.Element {
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
  const activeImage = images[3];

  const [selectedFeet, setSelectedFeet] = useState<number>(0);
  const [selectedInches, setSelectedInches] = useState<number>(0);

  const feetItems = [
    { label: '3', value: 1 },
    { label: '4', value: 2 },
    { label: '5', value: 3 },
    { label: '6', value: 4 },
    { label: '7', value: 5 },
  ];

  const inchesItems = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 },
    { label: '11', value: 11 },
  ];

  return (
    <SurveyBackground>
      <View style={styles.container}>
        <View style={styles.indicatorContainer}>
          <Indicator
            activeIndex={1}
            count={8}
            images={images}
            activeImage={activeImage}
          />
        </View>
        <View style={styles.pickerContainer}>
          <View >
            <Picker
              selectedValue={selectedFeet}
              style={styles.picker}
              onValueChange={(itemValue: number, itemIndex: number) => {
                setSelectedFeet(itemValue);
              }}
            >
              {feetItems.map((item) => (
                <Picker.Item
                  label={item.label + ' ft'}
                  value={item.value}
                  key={item.value}
                />
              ))}
            </Picker>
          </View>
          <View >
            <Picker
              selectedValue={selectedInches}
              style={styles.picker}
              onValueChange={(itemValue: number, itemIndex: number) => {
                setSelectedInches(itemValue);
              }}
            >
              {inchesItems.map((item) => (
                <Picker.Item
                  label={item.label + ' in'}
                  value={item.value}
                  key={item.value}
                />
              ))}
            </Picker>
          </View>
        </View>
      </View>
    </SurveyBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer: {
    left: -200,
    top:45,
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