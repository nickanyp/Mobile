import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddStudent from "../screens/AddStudent";
import StudentList from "../screens/StudentList";
import StudentInfo from "../screens/StudentInfo";

const Stack = createNativeStackNavigator();

function StudentData() {
    return(
        <Stack.Navigator>
        <Stack.Screen
          name="AddStudent"
          component={AddStudent}
          options={{
            title: "Add Student",
            headerStyle: { backgroundColor: "#2196F3" },
          }}
        />
        <Stack.Screen
          name="StudentList"
          component={StudentList}
          options={{
            title: "Student List",
            headerStyle: { backgroundColor: "#2196F3" },
          }}
        />
        <Stack.Screen
          name="StudentInfo"
          component={StudentInfo}
          options={{
            title: "Student Info",
            headerStyle: { backgroundColor: "#2196F3" },
          }}
        />
      </Stack.Navigator>
    )
}
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StudentData></StudentData>
    </NavigationContainer>
  );
};

export default AppNavigator;
