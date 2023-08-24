
// แสดงรายการเมนูอาหาร
// แยกคอมโพเนนต์ในส่วนแสดงรายการเมนูอาหารออกมา ระหว่าง CategoryMealsScreen กับ FavoritesScreen

import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./Mealtem";
import { MEALS } from "../data/dummy-data";

const MealList = (props, route) => {
  const renderMealItem = (itemData) => {
    return (
      <View style={{ height: 200, width: "100%" }}>
        <MealItem 
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity.toUpperCase()}
            affordability={itemData.item.affordability.toUpperCase()}
            image={itemData.item.imageUrl}
            onSelectMeal={() => {
              {props.navigation.navigate("MealDetail", {prev:"CategoryMeals",id: itemData.item.id ,title: itemData.item.title, steps: itemData.item.steps})}
            }}
          >
          </MealItem>
      </View>
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;