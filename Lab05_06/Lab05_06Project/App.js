import React from "react";
import { StyleSheet } from "react-native";
import MyNavigator from "./navigation/MyNavigator";


export default function App() {
  return (
    <MyNavigator/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
