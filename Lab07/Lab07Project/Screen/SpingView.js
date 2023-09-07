import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { StyleSheet, Text, View, Image, Button, Animated } from "react-native";

export default function SpringView() {
  const springVal = useRef(new Animated.Value(0.5)).current;
  const Spring = () => {
    Animated.spring(springVal, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start(() => {
      springVal.setValue(0.5);
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
      </View>
      <View style={styles.view2}>
        <View style={{ width: 300 }}>
          <View style={{ paddingBottom: 10 }}>
            <Button title="SPRING" onPress={Spring}></Button>
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
