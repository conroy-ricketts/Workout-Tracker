import React, { useState } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';
import SurveyBackground from './BackgroundComponent';
import Indicator from './IndicatorComponent';

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

  const [age, setAge] = useState({ years: '18', months: '0' });

  return (
    <SurveyBackground>
      <View style={{ position: 'absolute' }}>
        <Indicator
          activeIndex={1}
          count={8}
          images={images}
          activeImage={activeImage}
        />
      </View>
      <View style={styles.agePicker}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={age.years}
            onValueChange={(itemValue: string) => setAge({ ...age, years: itemValue })}
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            {Array.from({ length: 100 }, (v, i) => i + 18).map((value) => (
              <Picker.Item key={value} label={`${value} years`} value={value.toString()} />
            ))}
          </Picker>
        </View>
        <Text style={styles.pickerDivider}>-</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={age.months}
            onValueChange={(itemValue: string) => setAge({ ...age, months: itemValue })}
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            {Array.from({ length: 12 }, (v, i) => i).map((value) => (
              <Picker.Item key={value} label={`${value} months`} value={value.toString()} />
            ))}
          </Picker>
        </View>
      </View>
    </SurveyBackground>
  );
}

const styles = StyleSheet.create({
  agePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  pickerContainer: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
    color: 'black',
  },
  pickerItem: {
    fontSize: 20,
  },
  pickerDivider: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});
