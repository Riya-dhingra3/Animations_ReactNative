// used simple animated

// import React, { useRef } from 'react';
// import { View, Animated, StyleSheet, Button } from 'react-native';

// const RotateView = () => {
//   // Create an Animated.Value instance
//   const rotateAnim = useRef(new Animated.Value(0)).current;

//   // Function to start the rotation
//   const startRotation = () => {
//     Animated.timing(rotateAnim, {
//       toValue: 1, // Rotating from 0 to 1 (which maps to 360 degrees)
//       duration: 1000, // Duration of 1 second
//       useNativeDriver: true, // Use native driver for better performance
//     }).start(() => {
//       // Reset the animation value to 0 for continuous rotation
//       rotateAnim.setValue(0);
//     });
//   };

//   // Interpolating the rotate value from 0 to 360 degrees
//   const rotate = rotateAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'], // Rotate from 0 degrees to 360 degrees
//   });

//   return (
//     <View style={styles.container}>
//       {/* Apply the rotation transformation using transform: [{ rotate }] */}
//       <Animated.View style={[styles.box, { transform: [{ rotate }] }]} />
//       <Button title="Rotate" onPress={startRotation} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'dodgerblue',
//   },
// });

// export default RotateView;





// used reanimated

// create refrence by useShared value
// update the refrence value and add animated style use useAnimatedStyle
import React, { useCallback, useState } from 'react'
import { View,Text, ImageBackground, Dimensions,Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { GestureHandlerRootView, PanGestureHandler, TapGestureHandler, TextInput } from 'react-native-gesture-handler'
import Animated, { interpolate, interpolateColor, useAnimatedGestureHandler, useAnimatedStyle, withDelay, withSpring, withTiming } from 'react-native-reanimated'
import { useSharedValue } from 'react-native-reanimated'


const index = () => {

  // const animation=useSharedValue(1);
  // const [clicked,setclicked]=useState(false);
  // const animatedstyle=useAnimatedStyle(() =>{
  //   // return {transform: [{translateX: animation.value}]}
  //   // return {transform: [{rotate: `${animation.value}deg`}]}
  //   return {transform: [{scale: animation.value}]}
  // })
  // return (
  //   <View style={{flex:1 , justifyContent:'center', alignItems:'center' , backgroundColor:'white'}}>
  //       <Animated.View  style={[
  //         {
  //           width:100,
  //           height:100,
  //           backgroundColor:'orange'
  //         },animatedstyle
  //       ]}>
  //       </Animated.View>
  //       <TouchableOpacity style={{borderWidth:1,
  //                                   width:200,
  //                                   height:50,
  //                                   justifyContent:'center',
  //                                   marginTop:30
  //         }}
  //         //  onPress={()=>{if(clicked){
  //         //   animation.value= withSpring(-100)
  //         // }
  //         // else{
  //         //   animation.value= withSpring(100)
  //         // }
  //         // setclicked(!clicked)}}
  //         onPress={()=>{if(clicked){
  //           animation.value= withTiming(1,{duration:1000})
  //         }
  //         else{
  //           animation.value= withTiming(0.5,{duration:1000})
  //         }
  //         setclicked(!clicked)}}>
  //             <Text>Start Animation</Text>            
  //         </TouchableOpacity>
  //   </View>




  // using interpolate
  // 
  


  // using pangesture handler
// const DraggableBox = () => {
//   // Use shared values to track X and Y translation
//   const translateX = useSharedValue(0);
//   const translateY = useSharedValue(0);

//   // Gesture handler to update position on drag
//   const gestureHandler = useAnimatedGestureHandler({
//     onStart: (_, ctx) => {
//       // Store initial position at the start of the drag
//       ctx.startX = translateX.value;
//       ctx.startY = translateY.value;
//     },
//     onActive: (event, ctx) => {
//       // Update translation values as user drags
//       translateX.value = ctx.startX + event.translationX;
//       translateY.value = ctx.startY + event.translationY;
//     },
//     onEnd: () => {
//       // Snap the box back to its original position on drag end
//       translateX.value = withSpring(0); // Smooth spring animation back to 0
//       translateY.value = withSpring(0);
//     },
//   });

//   // Define animated styles for the box
//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         { translateX: translateX.value },
//         { translateY: translateY.value },
//       ],
//     };
//   });

//   return (
//     <View style={styles.container}>
//       <PanGestureHandler onGestureEvent={gestureHandler}>
//         <Animated.View style={[styles.box, animatedStyle]} />
//       </PanGestureHandler>
//     </View>
//   );
// };

// export default DraggableBox;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f4f4f4',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#007bff',
//     borderRadius: 8,
//   },
// });

  // 

//   import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
// import { PanGestureHandler } from 'react-native-gesture-handler';
// import { useAnimatedGestureHandler } from 'react-native-reanimated';

// const DraggableBox = () => {
//   // Use shared values to track X and Y translation
//   const translateX = useSharedValue(0);
//   const translateY = useSharedValue(0);

//   // Gesture handler to update position on drag
//   const gestureHandler = useAnimatedGestureHandler({
//     onStart: (_, ctx) => {
//       // Store initial position at the start of the drag
//       ctx.startX = translateX.value;
//       ctx.startY = translateY.value;
//     },
//     onActive: (event, ctx) => {
//       // Update translation values as user drags
//       translateX.value = ctx.startX + event.translationX;
//       translateY.value = ctx.startY + event.translationY;
//     },
//     onEnd: () => {
//       // Snap the box back to its original position on drag end
//       translateX.value = withSpring(0); // Smooth spring animation back to 0
//       translateY.value = withSpring(0);
//     },
//   });

//   // Define animated styles for the box
//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         { translateX: translateX.value },
//         { translateY: translateY.value },
//       ],
//     };
//   });

//   return (
//     <View style={styles.container}>
//       <PanGestureHandler onGestureEvent={gestureHandler}>
//         <Animated.View style={[styles.box, animatedStyle]} />
//       </PanGestureHandler>
//     </View>
//   );
// };

// export default DraggableBox;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f4f4f4',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#007bff',
//     borderRadius: 8,
//   },
// });

  


  // instagram like icon animation
  // const ImageComponent=Animated.createAnimatedComponent(Image);
  // const scale=useSharedValue(0);
  // const doubletap=useCallback(()=>{
  //   scale.value= withSpring(1, undefined, isFinished => {
  //     scale.value = withDelay( 100 , withSpring(0));
  //   })
  // },[])
  // const animatedStyle=useAnimatedStyle(()=>{
  //   return {
  //     transform : [{scale: Math.max(scale.value, 0 )}]
  //   }
  // })
  // return(
  //   <GestureHandlerRootView style={{flex:1}}>
  //   <View style={{flex:1 , justifyContent: 'center' , alignItems : 'center'}}>
  //     <TapGestureHandler numberOfTaps={2} maxDelayMs={250} onActivated={doubletap}>
  //       <Animated.View>
  //         <ImageBackground source={require('../../assets/images/nature.jpg')} style={{width: Dimensions.get('window').width , height:Dimensions.get('window').width , justifyContent:'center', alignItems:'center'}}>
  //             <ImageComponent source={require("../../assets/images/heart1-removebg-preview.png")} style={[{width:100, height:100},animatedStyle]}></ImageComponent>
  //         </ImageBackground>
  //       </Animated.View>
  //       </TapGestureHandler>
  //   </View>
  //   </GestureHandlerRootView>
  // )

  // Animated search bar
  // const animation=useSharedValue(0);
  // const animatedStyle=useAnimatedStyle(()=>{
  //   return {
  //     width: animation.value == 1?
  //     withTiming(300, {duration: 500}):
  //     withTiming(0, {duration: 500})
  //   }
  // })
  // return(
  //   <GestureHandlerRootView>
  //   <View style={{flex:1, justifyContent:'center' , alignItems:'center'}}>
  //       <Animated.View
  //         style={[{
  //           width:300,
  //           height:50,
  //           backgroundColor:'#E7E7E7',
  //           borderRadius:10,
  //           flexDirection: 'row',
  //           alignItems: 'center'
  //         },animatedStyle]}
  //       >
  //         <TextInput style={{width: '85%'}} placeholder='Search Here'></TextInput>
  //         <TouchableOpacity onPress={()=>{if(animation.value==1){animation.value=0}else{animation.value=1}}}> 
  //           <Image source={require('../../assets/images/search1.png')} style={{width:30, height:30}}></Image>
  //         </TouchableOpacity>
  //       </Animated.View>
  //   </View>
  //   </GestureHandlerRootView>
  // )

}

export default index
