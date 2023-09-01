import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/Mealtem";

const MealDetailScreen = ({navigation, route}) => {
  const {title,steps} = route.params;
  return (
    <View style={styles.screen}>
      <Text>Dish:{" "}{title}</Text>
      <Text>Steps:{" "}{steps}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          (navigation.navigate("Categories"));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
});

export default MealDetailScreen;