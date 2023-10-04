import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const FavoritesScreen = ({navigation}) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  return (
    <View style={styles.screen}>
      <MealList listData={favMeals} navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;