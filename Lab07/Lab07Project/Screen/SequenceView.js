import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Animated,
  Easing,
} from "react-native";

export default function SequenceView() {
  const opacityVal = useRef(new Animated.Value(1)).current;
  const spinVal = useRef(new Animated.Value(0)).current;

  const spin = spinVal.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const seqAnime = () => {
    Animated.sequence([
      Animated.timing(opacityVal, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityVal, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(spinVal, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(spinVal, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      opacityVal.setValue(1);
      spinVal.setValue(0);
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Animated.Image
          style={{
            opacity: opacityVal,
            width: 180,
            height: 150,
            resizeMode: "contain",
            transform: [{ rotate: spin }],
          }}
          source={require("../assets/IT_Logo.png")}
        ></Animated.Image>
      </View>
      <View style={styles.view2}>
        <View style={{ width: 300 }}>
          <View style={{ paddingBottom: 10 }}>
            <Button title="RUN SEQUENCE" onPress={seqAnime}></Button>
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
