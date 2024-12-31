// import Ionicons from "@expo/vector-icons/Ionicons";
// import { StyleSheet, Image, Platform, View, Text } from "react-native";
// import Animated, {
//   useAnimatedGestureHandler,
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
// } from "react-native-reanimated";
// import {
//   FlatList,
//   GestureHandlerRootView,
//   PanGestureHandler,
// } from "react-native-gesture-handler";
// import { transform } from "@babel/core";
// import React from "react";
// import SliderItem from "./SliderItem";

import React, { useEffect } from "react";
import { useState } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native"; // Ensure View is imported
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SliderItem from "./SliderItem"; // Adjust path as needed
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { AnimatedImage } from "react-native-reanimated/lib/typescript/reanimated2/component/Image";

export default function TabTwoScreen() {
  // const animation=useSharedValue(0);
  // const gestureHandler=useAnimatedGestureHandler({
  //   onStart:(event,ctx) => {
  //       ctx.startX=animation.value
  //   },
  //   onActive:(event,ctx) => {
  //       animation.value=ctx.startX + event.translationX
  //   },
  //   onEnd:(event,ctx)=>{
  //       animation.value=withSpring(0);
  //   }
  // })

  // const animatedStyle=useAnimatedStyle(()=>{
  //   return {
  //     transform: [{translateX : animation.value}]
  //   }
  // })

  // const animatedleftIcon=useAnimatedStyle(()=>{
  //   return {
  //     transform: [{scale: animation.value>50 ? withSpring(2) : withSpring(1)}]
  //   }
  // })

  // const animatedrightIcon=useAnimatedStyle(()=>{
  //   return {
  //     transform: [{scale: animation.value < -50 ? withSpring(2) : withSpring(1)}]
  //   }
  // })

  // return (
  //   <GestureHandlerRootView>
  //   <View style={{
  //     flex:1,
  //     justifyContent:'center',
  //     alignItems:'center'}}>
  //       <PanGestureHandler onGestureEvent={gestureHandler}>
  //           <Animated.View style={{
  //             backgroundColor:'green',
  //             width:'100%',
  //             height:100,
  //             elevation:5,
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             justifyContent: 'space-between',
  //             borderRadius: 10,
  //             }}>
  //               <Animated.View style={[{width:14, height:14, marginLeft: 20},animatedleftIcon]}>
  //                     <Image source={require('../../assets/images/download1.png')} style={{width: '100%', height:'100%'}}></Image>
  //               </Animated.View>
  //               <Animated.View style={[{width:14, height:14, marginRight: 20},animatedrightIcon]}>
  //                     <Image source={require('../../assets/images/download1.png')} style={{width: '100%', height:'100%'}}></Image>
  //               </Animated.View>
  //               <Animated.View style={[{
  //                   width:'100%',
  //                   height:'100%',
  //                   backgroundColor:'white',
  //                   position:'absolute',
  //                   borderRadius: 10,
  //                   flexDirection: 'row'
  //                 },animatedStyle]}>
  //                     <View style={{width:50, height: 50, backgroundColor: 'purple' , borderRadius: 25, marginLeft: 20, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
  //                       <Text style={{color: 'white', fontSize: 30, fontWeight: '600'}}>
  //                         A
  //                       </Text>
  //                     </View>
  //                       <View style={{marginLeft: 20,marginTop:20}}>
  //                           <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
  //                             Demo Title
  //                           </Text>
  //                           <Text>Demo title</Text>
  //                     </View>
  //                 </Animated.View>
  //             </Animated.View>
  //         </PanGestureHandler>
  //     </View>
  //     </GestureHandlerRootView>

  //   const [currentIndex,setCurrentIndex] = useState(0);
  //   return(
  //   <GestureHandlerRootView style={{ flex: 1 , backgroundColor:'white' }}>
  //   <View
  //     style={{
  //       flex: 1,
  //       justifyContent: "center",
  //       alignItems: "center",
  //       backgroundColor: "white",
  //     }}
  //   >
  //     <FlatList
  //       horizontal
  //       onScroll = { e => {
  //         const X=e.nativeEvent.contentOffset.x;
  //         console.log((X/Dimensions.get('window').width).toFixed(0))
  //         const newIndex = Math.round(X / Dimensions.get('window').width); // Use Math.round to get nearest integer
  //         setCurrentIndex(newIndex);
  //     }}
  //       data={[
  //         require("../../assets/images/slide1.jpeg"),
  //         require("../../assets/images/slide2.jpeg"),
  //         require("../../assets/images/slide3.jpeg"),
  //       ]}
  //       renderItem={({ item, index }) => {
  //         return <SliderItem image={item} index={index} currentIndex={currentIndex}/>;
  //       }}
  //     />
  //   </View>
  // </GestureHandlerRootView>
  //   )

  // const [isDay, setIsDay] = useState(true);
  // const animation = useSharedValue(0);

  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateX: animation.value,
  //       },
  //     ],
  //   };
  // });
  // return (
  //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //     <TouchableOpacity
  //       style={{
  //         width: 150,
  //         height: 50,
  //         borderRadius: 30,
  //         borderWidth: 1,
  //         flexDirection: "row",
  //         alignItems: "center",
  //         paddingLeft: 5,
  //         backgroundColor: isDay ? "white" : "black",
  //         paddingRight: 5,
  //       }}
  //       onPress={() => {
  //         if (animation.value == 0) {
  //           animation.value = withTiming(100, { duration: 500 });
  //           setIsDay(false);
  //         } else {
  //           animation.value = withTiming(0, { duration: 500 });
  //           setIsDay(true);
  //         }
  //       }}
  //     >
  //       <Animated.View
  //         style={[{ width: 40, height: 40, borderRadius: 20 }, animatedStyle]}
  //       >
  //         <Image
  //           source={
  //             isDay
  //               ? require("../../assets/images/day.png")
  //               : require("../../assets/images/night.png")
  //           }
  //           style={{ width: "100%", height: "100%" }}
  //         ></Image>
  //       </Animated.View>
  //     </TouchableOpacity>
  //   </View>

  // when click on logo logo gets zoom (nothing else is visible and a new icon se seen oon clciking on that everything is seen along with small icon

  //   const AnimatedImage=Animated.createAnimatedComponent(Image);
  //   const w=useSharedValue(70);
  //   const h=useSharedValue(70);
  //   const y=useSharedValue(0);
  //   const scale=useSharedValue(0);
  //   const viewvisible=useSharedValue(0);

  //   const animatedStyle=useAnimatedStyle(()=>{
  //     return{
  //       width:w.value,
  //       height:h.value,
  //       transform:[{translateY: y.value}]
  //     }
  //   })
  //   const Animatedbtn=Animated.createAnimatedComponent(TouchableOpacity);

  //   const animatedbtnstyle=useAnimatedStyle(()=>{
  //     return{
  //       transform:[{scale:scale.value}]
  //     }
  //   })

  //   const animatedStyleview=useAnimatedStyle(()=> {
  //     return{
  //       transform:[{translateX: viewvisible.value}]
  //     }
  //   })

  //   return(
  //     <View style={{flex:1}}>
  //       <Animatedbtn style={[{
  //         width:40,
  //         height:40,
  //         justifyContent:'center',
  //         alignItems:'center',
  //         marginLeft: 20,
  //         marginTop: 40
  //       },animatedbtnstyle]} onPress={()=>{
  //         viewvisible.value=withTiming(0,{duration: 300})
  //         scale.value=withTiming(0,{duration:500});
  //         w.value=withTiming(70,{duration:500});
  //         h.value=withTiming(70,{duration:500});
  //         y.value=withTiming(0,{duration:500});
  //       }}><Image source={require('../../assets/images/cross.png')} style={{width:24, height: 24}}></Image></Animatedbtn>
  //         <TouchableOpacity onPress={()=>{
  //           if(w.value == 70){
  //             viewvisible.value=withTiming(-Dimensions.get('window').width,{duration:300});
  //             scale.value=withTiming(1,{duration:500});
  //             w.value=withTiming(300,{duration:500});
  //             h.value=withTiming(300,{duration:500});
  //             y.value=withTiming(150,{duration:500});
  //           }
  //         }}>
  //             <AnimatedImage source={require('../../assets/images/imagelogo.png')} style={[{width:70 , height:70, marginLeft: 20, marginTop: 20, resizeMode:'contain'},animatedStyle]}></AnimatedImage>
  //         </TouchableOpacity>

  //         <Animated.View style={[{width:'90%', height:100, backgroundColor:'#292929', alignSelf: 'center', marginTop: 20, borderRadius: 10 },animatedStyleview]}></Animated.View>
  //     </View>

  // const [count,setcount]=useState(0);
  // const animateX=useSharedValue(0);
  // const animateY=useSharedValue(0);
  // const scale=useSharedValue(0);
  // const [btnclicked,setbtnclicked]=useState(false);
  // const scale1=useSharedValue(1);

  // const animatedstyle=useAnimatedStyle(()=>{
  //   return{
  //     transform: [{translateX:animateX.value},{translateY:animateY.value},{scale:scale.value}]
  //   }
  // })

  // const animatedstyle1=useAnimatedStyle(()=>{
  //   return{
  //     transform: [{scale:scale1.value}]
  //   }
  // })
  // return (
  //   <View style={{ flex: 1 }}>
  //     <Image
  //       source={require("../../assets/images/shoes.jpeg")}
  //       style={{ width: "100%", height: 300 }}
  //     ></Image>
  //      <Animated.View
  //       style={[{
  //         width: 60,
  //         height: 60,
  //         backgroundColor: "white",
  //         // borderBlockColor: 30,
  //         justifyContent: "center",
  //         alignItems: "center",
  //         position: "absolute",
  //         top: 40,
  //         right: 25,
  //         borderRadius: 30,
  //       },animatedstyle1]}
  //     >
  //       <Image source={require("../../assets/images/cart.jpg")} style={{width:30 , height:30}}></Image>
  //       <View style={{width:30, height:30, backgroundColor:'red', borderRadius:15,justifyContent:'center', alignItems:'center', position:'absolute' ,top:0, right:0}}>
  //         <Text style={{color:'white', fontSize:16}}>{count}</Text>
  //       </View>
  //     </Animated.View>
  //     <Text
  //       style={{
  //         fontSize: 20,
  //         fontWeight: "500",
  //         color: "black",
  //         marginTop: 10,
  //         marginLeft: 10,
  //       }}
  //     >
  //       Perfect Shoes
  //     </Text>
  //     <Text
  //       style={{
  //         width: "94%",
  //         alignSelf: "center",
  //         marginTop: 10,
  //         fontSize: 16,
  //       }}
  //     >
  //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
  //       quidem, dolor, consequatur iusto officia consectetur dignissimos vitae
  //       dolores officiis inventore quia quis adipisci. Nisi vel, eveniet
  //       reprehenderit maxime suscipit iusto!Loremlore Lorem ipsum dolor sit amet
  //       consectetur adipisicing elit. Illum explicabo soluta quod veritatis
  //       sapiente. Aperiam esse vitae asperiores atque, omnis eligendi eaque,
  //       excepturi inventore similique minima reprehenderit voluptates corporis
  //       voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  //       Dignissimos explicabo commodi accusamus neque, et voluptate repudiandae
  //       itaque laborum eveniet similique, vitae esse eligendi incidunt. Repellat
  //       quam quidem itaque mollitia explicabo.
  //     </Text>
  //     <Animated.View style={[{width:30, height:30,borderRadius:15, backgroundColor: 'red', justifyContent: 'center', alignItems:'center', alignSelf:'center'},animatedstyle]}>
  //         <Text style={{color:'white' ,fontSize: 16 }}>{"+1"}</Text>
  //       </Animated.View>
  //     <TouchableOpacity
  //     disabled={btnclicked}
  //       style={{
  //         width: "90%",
  //         height: 50,
  //         backgroundColor: "black",
  //         alignSelf: "center",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         marginTop: 10,
  //         borderRadius: 10,
  //       }} onPress={()=>{
  //         if(animateX.value==0){
  //           setbtnclicked(true);
  //           scale.value=1; 
  //           animateX.value=withTiming(155,{duration:1500});
  //           animateY.value=withTiming(-610,{duration:1500});
  //           setTimeout(()=>{
  //             scale1.value=withSpring(1.5);
  //             setcount(count+1)
  //               scale.value=0;
  //               animateX.value=withTiming(0,{duration:1500});
  //               animateY.value=withTiming(0,{duration:1500});
  //               setbtnclicked(false);
  //               setTimeout(()=>{
  //                 scale1.value=withSpring(1)
  //               },150)
  //           },1500)
  //         }
  //       }}
  //     >
  //       <Text style={{ color: "white"}}>Add to Cart</Text>
  //     </TouchableOpacity>
  //   </View>
  const [selectedtab,setselectedtab] = useState(0);

  // State for changing the color of buttons
  const [color1,setcolor1] = useState('black');
  const [color2,setcolor2] = useState('black');
  const [color3,setcolor3] = useState('black');

  const animateX=useSharedValue(0);
  const animateY=useSharedValue(0);
  const AnimatedBtn=Animated.createAnimatedComponent(TouchableOpacity);

  // Refrences for button
  const animatedbtn1Y=useSharedValue(0);
  const animatedbtn2Y=useSharedValue(0);
  const animatedbtn3Y=useSharedValue(0);

  const animatedStyle=useAnimatedStyle(()=>{
    return{
      transform: [{translateX:animateX.value} , {translateY:animateY.value}]
    }
  })

  const animatedStylebtn1=useAnimatedStyle(()=>{
    return{
      transform: [{translateY:animatedbtn1Y.value}]
    }
  })

  const animatedStylebtn2=useAnimatedStyle(()=>{
    return{
      transform: [{translateY:animatedbtn2Y.value}]
    }
  })

  const animatedStylebtn3=useAnimatedStyle(()=>{
    return{
      transform: [{translateY:animatedbtn3Y.value}]
    }
  })
  useEffect(()=>{
    if(selectedtab == 0){
      setcolor2('black');
      setcolor3('black');
        animateY.value=withTiming(50,{duration:500})
        setTimeout(()=>{
          animateX.value=withTiming(0,{duration:500});
        },500)
        setTimeout(()=>{
          animatedbtn1Y.value=withTiming(-150,{duration:500})
          animateY.value=withDelay(100,withTiming(-150, {duration:500}))
          setTimeout(()=>{
            animateY.value=withTiming(0,{duration:500})
            animatedbtn1Y.value=withTiming(0,{duration:500})
            setTimeout(()=>{ setcolor1('white');},400)
        },500)
        },1000)
    }
    else if(selectedtab==1){
      setcolor1('black');
      setcolor3('black');
      animateY.value=withTiming(50,{duration:500})
      setTimeout(()=>{
        animateX.value=withTiming(114,{duration:500});
      },500)

      setTimeout(()=>{
        animatedbtn2Y.value=withTiming(-150,{duration:500})
        animateY.value=withDelay(100,withTiming(-150, {duration:500}))
        setTimeout(()=>{
          animateY.value=withTiming(0,{duration:500})
          animatedbtn2Y.value=withTiming(0,{duration:500})
          setTimeout(()=>{ setcolor2('white');},400)
        },500)
      },1000)
    }
    else{
      setcolor1('black');
      setcolor2('black');
      animateY.value=withTiming(50,{duration:500})
      setTimeout(()=>{
        animateX.value=withTiming(224,{duration:500});
      },500)

      setTimeout(()=>{
        animatedbtn3Y.value=withTiming(-150,{duration:500})
        animateY.value=withDelay(100,withTiming(-150, {duration:500}))
        setTimeout(()=>{
          animateY.value=withTiming(0,{duration:500})
          animatedbtn3Y.value=withTiming(0,{duration:500})
          setTimeout(()=>{ setcolor3('white');},400)
        },500)
      },1000)
    }
  },[selectedtab])


return(
  <View style={{flex:1}}>
      <View style={{width: '100%', height:70, elevation:5, position:'absolute', bottom:0, backgroundColor: 'white', flexDirection: 'row', justifyContent:'space-evenly'}}>
        <Animated.View style={[{width:60,height:60,borderRadius: 30, backgroundColor: 'orange', position : 'absolute'},animatedStyle]}></Animated.View>
            <AnimatedBtn style={[{width:60, height:60, justifyContent:'center', alignItems:'center'},animatedStylebtn1]} onPress={()=>{setselectedtab(0)}}>
                <Image source={require("../../assets/images/homeicon.png")} style={{height:30 , width:30, tintColor:color1}}></Image>
            </AnimatedBtn>
            <AnimatedBtn style={[{width:60, height:60, justifyContent:'center', alignItems:'center'},animatedStylebtn2]} onPress={()=>{setselectedtab(1)}}>
                <Image source={require("../../assets/images/carticonbgr.png")} style={{height:30 , width:30, tintColor: color2}}></Image>
            </AnimatedBtn>
            <AnimatedBtn style={[{width:60, height:60, justifyContent:'center', alignItems:'center'},animatedStylebtn3]} onPress={()=>{setselectedtab(2)}}>
                <Image source={require("../../assets/images/settingsiconbgr.png")} style={{height:30 , width:30, tintColor: color3}}></Image>
            </AnimatedBtn>
      </View>
  </View>
  );
}
