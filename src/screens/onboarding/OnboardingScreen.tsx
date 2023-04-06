import React from 'react'
import { Image, Text, View, StyleSheet,StatusBar, Dimensions, Animated} from 'react-native'
const {width,height} = Dimensions.get('window')

const items = [{
    id: 1,
    image: require('../../../assets/1.jpg'),
    indicator:require('../../../assets/Indicator.png'),
    title: 'Find the right\n workout for what you need',
    description: 'Fit 4 U is the ideal program for creating workouts tailored to your specific needs, whether you want to lose weight, gain strength, or simply keep active. Train up to seven days each week. '
},{
    id: 2,
    image: require('../../../assets/2.jpg'),
    indicator:require('../../../assets/Indicator2.png'),
    title: 'Unlimited support to stay\n on track',
    description:'Fit 4 U provides daily check-ins as well as a memory album of your progress to keep you motivated, guide your workout, and make any changes needed based on your work schedule or travel.'
},{
    id: 3,
    image: require('../../../assets/3.jpg'),
    indicator:require('../../../assets/Indicator3.png'),
    title: 'Your own custom designed\n workout plan',
    description:'Your designed workouts will be split into certain amount of days\n you plan to exercise per week based on your schedule\n and progress.'
}]

const OnboardingScreen = () => {
    const scrollAnimation = React.useRef(new Animated.Value(0)).current
    return (
        <View style = {styles.screen}>
            <StatusBar hidden />
            <Animated.FlatList 
                data={items} 
                bounces = {false}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={({ id }) => id.toString()}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollAnimation } } }],
                    { useNativeDriver: true }
                )}
                renderItem={({item, index}) =>{
                    const inputRange = [width * (index - 0.5), width * index, width * (index + 0.5)]
                    return(
                        <View style={styles.item}>
                            <Animated.Image 
                                source={item.image} 
                                style={[
                                    styles.image,
                                    {
                                        transform: [{
                                            translateX: scrollAnimation.interpolate({
                                                inputRange: [width * (index - 1), width * index, width * (index + 1)],
                                                outputRange: [-width * 0.5, 0, width * 0.5]
                                            })
                                        }]
                                    }
                                ]} 
                                resizeMode='stretch'
                            />
                            <View style={styles.fixedImageContainer}>
                                <Image source={require('../../../assets/TextBackground.png')} style={styles.fixedImage} />
                            </View>
                            <Animated.View 
                                style={[
                                    styles.titleContainer,
                                    {
                                        opacity: scrollAnimation.interpolate({
                                            inputRange: inputRange,
                                            outputRange: [0, 1, 0]
                                        }),
                                        transform:[{
                                            translateX: scrollAnimation.interpolate({
                                                inputRange: inputRange,
                                                outputRange: [250, 0, -250],
                                            })
                                        }]
              
                                    }
                                    ,]}
                            >
                                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.title}>{item.title}</Text>
                            </Animated.View>
                            <Animated.View style={StyleSheet.absoluteFillObject}/>
                            <Animated.View 
                                style={[
                                    styles.descriptionContainer,
                                    {
                                        opacity: scrollAnimation.interpolate({
                                            inputRange: inputRange,
                                            outputRange: [0, 1, 0]
                                        }),
                                        transform:[{
                                            translateX: scrollAnimation.interpolate({
                                                inputRange: inputRange,
                                                outputRange: [250, 0, -250],
                                            })
                                        }]
              
                                    }
                                    ,]}
                            >
                                <Text numberOfLines={3} ellipsizeMode='tail' style={styles.description}>{item.description}</Text>
                            </Animated.View>
                            <Animated.View style={StyleSheet.absoluteFillObject}/>

                            <Animated.Image 
                                source={item.indicator} 
                                style={[
                                    styles.indicatorContainer,
                                    {
                                        opacity: scrollAnimation.interpolate({
                                            inputRange: inputRange,
                                            outputRange: [0, 1, 0]
                                        }),
                                        transform:[{
                                            translateX: scrollAnimation.interpolate({
                                                inputRange: inputRange,
                                                outputRange: [250, 0, -250],
                                            })
                                        }]
                                    }
                                ]} 
                            />
                        </View>
        
                    )
                }}
            />
            <View style={styles.appTitleContainer}>
                <Image source={require('../../../assets/Fit-4-U.png')} style={styles.appTitle} />
            </View>
        </View>
    
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
    },
    item: {
        position:'relative',
        alignItems: 'center',
        justifyContent: 'center',
        overflow:'hidden',
        width,
        height,
    },
    image:{
        width: width,
        height: height ,
        zIndex: 0
    },
    titleContainer:{
        position: 'absolute',
        top: height < 900 ? (height * .695):(height * .69),
        zIndex: 3,
    },
    title:{
        fontSize: height < 900 ? 25:30,
        color:'#ffffff',
        textAlign: 'center',
        lineHeight: height < 900 ? 30:45,
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
        textShadowColor: 'rgba(0, 0, 0, 0.25)'
    },
    descriptionContainer:{
        position: 'absolute',
        top: height * .79,
        zIndex: 3,
    },
    description:{
        fontSize: 11,
        color:'#ffffff',
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: 18,
    },
    appTitleContainer: {
        position: 'absolute',
        top: height < 900 ? (height * 0.015):(height * 0.036),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    appTitle: {
        width: (width*0.48),
        height: (height*0.077),
        resizeMode: 'contain',
    },
    fixedImageContainer:{
        position: 'absolute',
        bottom: -10,
        zIndex: 2,
    },
    fixedImage:{
        width,
        height: (height * 0.32),
        borderTopRightRadius: 48,
        borderTopLeftRadius: 48,
        resizeMode: 'cover',
    },
    indicatorContainer:{
        width: (width * .25),
        height: 4,
        bottom: (height * 0.32 - 180),
        zIndex: 3,
        resizeMode: 'contain'

    }
})
export default OnboardingScreen
