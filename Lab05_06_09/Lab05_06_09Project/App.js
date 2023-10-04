import React from "react";
import { StyleSheet } from "react-native";
import MealNavigator from "./navigation/MealNavigator";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducers/mealsReducer";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  meals:mealsReducer
})

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MealNavigator />
    </Provider>
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
