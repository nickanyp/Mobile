import React from "react";
import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsActions"

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch(action.type) {
      case TOGGLE_FAVORITE : 
        const find = state.favoriteMeals.findIndex((item) => action.mealId == item.id)
        if (find >= 0) {
          console.log(state)
          return {...state, favoriteMeals: state.favoriteMeals.splice(find, 1)}
        } else {
          console.log("not found")
          console.log(state.meals.find((item) => item.id == action.mealId))
          return {...state, favoriteMeals: [...state.favoriteMeals, state.meals.find((item) => item.id == action.mealId)]}
        }
      default:
        return state;
    }
  };

export default mealsReducer;