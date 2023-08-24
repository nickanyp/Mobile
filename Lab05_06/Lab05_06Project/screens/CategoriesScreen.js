import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({navigation}) => {

  const renderGridItem = (itemData) => {
    return (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onSelect={() => {
            {navigation.navigate("CategoryMeals", {prev:"Categories", id: itemData.item.id ,title: itemData.item.title})}
          }}
        ></CategoryGridTile>
    );
  };

  return (
    <View>
      <FlatList 
      data={CATEGORIES} 
      renderItem={renderGridItem} 
      numColumns={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;