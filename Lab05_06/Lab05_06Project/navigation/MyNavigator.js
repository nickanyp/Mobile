import React from "react";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


//1
function MealsFavTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-restaurant" size={size} color={color}/>;
          },
          headerShown: false,
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "gray"
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Favorites"
        component={FavNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-star" size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "gray"
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

//1.1
function MealsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
          headerStyle: { backgroundColor: "#4a148c" },
          headerTintColor: "white",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: { backgroundColor: "#4a148c" },
          headerTintColor: "white",
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: { backgroundColor: "#4a148c" },
          headerTintColor: "white",
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

//1.2
function FavNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Your Favorites" 
      component={FavoritesScreen}
      options={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
      ></Stack.Screen>
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

//2
function FiltersNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Filter Meals" component={FiltersScreen}
        options={{
          headerStyle: { backgroundColor: "#4a148c" },
          headerTintColor: "white",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{drawerActiveTintColor: "orange", drawerInactiveTintColor: "gray"}}>
        <Drawer.Screen
          name="MealsFav"
          component={MealsFavTabNavigator}
          options={{
            drawerLabel: "Meals",
            headerShown: false,
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Filters"
          component={FiltersNavigator}
          options={{
            drawerLabel: "Filters",
            headerShown: false,
          }}
        ></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Screen เป็นคอมโพเนนต์ที่ใช้ในการกำหนดเส้นทางสำหรับการทำ navigation โดยมี prop ที่สำคัญ เช่น
// • name : เป็นชื่อของเส้นทางที่ Navigator ใช้อ้างถึง
// • component : อ้างถึงคอมโพเนนต์ที่ต้องการเรนเดอร์ (หน้าจอที่จะแสดงผล)
// • options : ใช้กำหนดรายละเอียดเกี่ยวกับการแสดงผลของหน้าจอนั้นๆ

// Navigator จะประกอบด้วย Screen อยู่ภายใน ใช้กำหนดค่าสำหรับควบคุมการทำ navigation มี prop ที่สำคัญ เช่น
// • initialRouteName : ใช้กำหนดเส้นทางเริ่มต้นของการท า Navigation
// • screenOptions : ใช้กำหนดรายละเอียดการแสดงผลโดยรวมของ Screen ที่ Navigator ดูแลทั้งหมด