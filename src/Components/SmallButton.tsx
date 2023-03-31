import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5BC0BE',
    padding: 15,
    borderRadius: 48,
    alignItems: 'center',
    height: 50,
    width: 120,
  },
  buttonText: {
    color: '#0B132B',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Button;
