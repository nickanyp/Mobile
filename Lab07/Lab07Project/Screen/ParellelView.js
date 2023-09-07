import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { StyleSheet, Text, View, Image, Button, Animated } from "react-native";

export default function ParallelView() {
  const springVal = useRef(new Animated.Value(0.5)).current;
  const slideVal = useRef(new Animated.Value(0)).current;
  const slide = slideVal.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    outputRange: [0, -75, -50, -25, 0, 25, 50, 75 ,0],
  });
  const seqAnime = () => {
    Animated.parallel([
      Animated.spring(springVal, {
        toValue: 1,
        friction: 1,
        useNativeDriver: true,
      }).start(() => springVal.setValue(0.5)),
      Animated.timing(slideVal, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(slideVal, {
        toValue: 8,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      slideVal.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Animated.Image
          style={{
            width: 180,
            height: 150,
            resizeMode: "contain",
            transform: [{ scale: springVal }],
          }}
          source={require("../assets/IT_Logo.png")}
        ></Animated.Image>
        <Animated.Text
          style={{
            color: "orange",
            fontWeight: "bold",
            fontSize: 20,
            padding: 10,
            transform: [{ translateX: slide }],
          }}
        >
          Welcome to Faulty of IT!!
        </Animated.Text>
      </View>
      <View style={styles.view2}>
        <View style={{ width: 300 }}>
          <View style={{ paddingBottom: 10 }}>
            <Button title="RUN PARELLEL" onPress={seqAnime}></Button>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
