import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Navigator from "./Navigator";

export default function App() {
  return <Navigator></Navigator>;
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
