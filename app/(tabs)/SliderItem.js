import React, { useEffect } from 'react'
import { Dimensions,Image } from 'react-native'
import { useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated'
import Animated from 'react-native-reanimated'

const SliderItem = ({image,index,currentIndex}) => {
  const animation=useSharedValue(0);

  useEffect(()=>{
    animation.value=currentIndex
  },[currentIndex])

  const animatedStyle=useAnimatedStyle(()=>{
    return {
        transform: [{
            scale: animation.value == index ? withSpring(1) : withSpring(0.5)}]
    }
  })
  return (
    <Animated.View style={[{width:Dimensions.get('window').width-40 , height:Dimensions.get('window').height, justifyContent:'center', alignItems:'center'},animatedStyle]}>
        <Image source={image} style={{width:200, height: 200}}></Image>
    </Animated.View>
  )
}

export default SliderItem
