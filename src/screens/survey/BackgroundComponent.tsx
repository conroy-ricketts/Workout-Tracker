import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'

type Props = {
  children: React.ReactNode;
};

const SurveyBackground = ({ children }: Props) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/Background.png')}
                style={styles.background}
            >
                {children}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B132B',
        height: '100%',
        width: '100%',
        zIndex: -1
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
})

export default SurveyBackground

