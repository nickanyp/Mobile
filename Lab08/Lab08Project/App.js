import React, { useRef } from "react";
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  View,
  Image,
  useAnimatedValue,
} from "react-native";

export default function App() {
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({ x: pan.x._value, y: pan.y._value });
      pan.setValue({ x: 0, y: 0 });
    },
    //กำหนดการทำงานเมื่อมีการลากนิ้ว
    onPanResponderMove: (evt, gestureState) => {
      const touches = evt.nativeEvent.touches;
      if (touches.length >= 2) {
        Animated.spring(scale, {
          toValue: 3,
          friction: 3,
          useNativeDriver: false,
        }).start();
      } else if (touches.length == 1) {
        pan.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        });
      }
    },
    onPanResponderRelease: () => {
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: false,
      }).start();
      pan.flattenOffset();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        {...panResponder.panHandlers}
        style={[
          pan.getLayout(),
          {
            width: 120,
            height: 120,
            resizeMode: "contain",
          },
          { transform: [{ scale: scale }] },
        ]}
        source={require("./assets/IT_Logo.png")}
      ></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
