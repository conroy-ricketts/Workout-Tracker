import React from 'react'
import { View, Image, ImageSourcePropType, StyleSheet } from 'react-native'

interface IndicatorProps {
  activeIndex: number;
  count: number;
  images: ImageSourcePropType[];
  activeImage: ImageSourcePropType;
}

const Indicator: React.FC<IndicatorProps> = ({ activeIndex, count, images, activeImage }) => {
    return (
        <View style={styles.container}>
            {images.map((image, index) => {
                const isActive = activeImage === image
                const shouldShow = index < count
                const zIndex = isActive ? 1 : 0
                const opacity = isActive ? 1 : 0

                return (
                    shouldShow && (
                        <Image
                            key={index}
                            source={image}
                            style={[styles.image, { opacity, zIndex }]}
                        />
                    )
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: -350, 
        left: 50, 
        right: 0,
    },
    image: {
        width: 320,
        height: 7,
        position: 'absolute',
    },
})

export default Indicator
