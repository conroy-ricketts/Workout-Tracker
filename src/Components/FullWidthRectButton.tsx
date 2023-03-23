import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

type RectButtonProps ={
  text: string;
};

const FullWidthRectButton = (props: RectButtonProps) => {
    return (
      <TouchableOpacity
        style={styles.TouchableOpacity}
      >
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    );
  };

  //For a responsive width use Dimensions.get('window').width * 0.8,

  const styles = StyleSheet.create({
      TouchableOpacity:{
      backgroundColor: '#5BC0BE',
      padding: 15,
      borderRadius: 5,
      justifyContent: 'center',
      width: 358,
      height: 64,
    },

    text:{
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
    }

  })

  export default FullWidthRectButton;