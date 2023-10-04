import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES,MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({route, navigation}) => {
  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(route.params.id) >= 0
  );
  return (
    <View style={styles.screen}>
      <MealList
        listData={displayedMeals} navigation={navigation}
      ></MealList>
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

export default CategoryMealsScreen;