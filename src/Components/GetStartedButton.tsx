import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const GetStartedButton = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#5BC0BE',
          padding: 15,
          borderRadius: 5,
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>GET STARTED</Text>
      </TouchableOpacity>
    );
  };

  export default GetStartedButton;