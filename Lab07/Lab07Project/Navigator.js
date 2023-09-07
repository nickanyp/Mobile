import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import SpringView from "./Screen/SpingView";
import SequenceView from "./Screen/SequenceView";
import ParallelView from "./Screen/ParellelView";

const Tabs = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Spring"
          component={SpringView}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <SimpleLineIcons name="graph" size={size} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "gray",
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="Sequence"
          component={SequenceView}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="menu" size={size} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "gray",
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="Parellel"
          component={ParallelView}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons
                  name="md-share-social-outline"
                  size={size}
                  color={color}
                />
              );
            },
            headerShown: false,
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "gray",
          }}
        ></Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
