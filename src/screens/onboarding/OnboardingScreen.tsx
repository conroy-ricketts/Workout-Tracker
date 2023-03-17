import React from 'react'
import { Image, Text, View, StyleSheet,StatusBar, Dimensions, Animated } from 'react-native'
const {width,height} = Dimensions.get('window')
const items = [{
  id: 1,
  image: require('./1.jpg'),
  title: "Find the right workout for what you need"
},{
  id: 2,
  image: require('./2.jpg'),
  title: "Unlimited support to stay on track" 
},{
  id: 3,
  image: require('./3.jpg'),
  title: "Your own custom designed workout plan"
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
          resizeMode="cover"
        />
      <View style={styles.fixedImageContainer}>
        <Image source={require('./TextBackground.png')} style={styles.fixedImage} />
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
          ]}
        >
        <Text style={styles.title}>{item.title}</Text>
        </Animated.View>
        <Animated.View style={StyleSheet.absoluteFillObject}/>
        </View>
      )
    }}
     />

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
    width,
    height,
    zIndex: 0

    
  },
  titleContainer:{
    position: 'absolute',
    bottom: 80,
    zIndex: 3
  },
  title:{
    fontSize: 24,
    color:'#ffffff',
  },
  fixedImageContainer:{
    position: 'absolute',
    bottom: 0,
    zIndex: 2
  },
  fixedImage:{
    width,
    height: 299,
    resizeMode: 'cover',
  },
})

export default OnboardingScreen
