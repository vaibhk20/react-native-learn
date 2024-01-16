import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialIcons,
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Home from "./Home";
import News from "./News";
import Social from "./Social";
import FAQ from "./FAQ";

const Tab = createBottomTabNavigator();

const TabsLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1F7455",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#00B874",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "semibold",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="newspaper-o" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Social"
        component={Social}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="megaphone" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FAQ"
        component={FAQ}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="frequently-asked-questions"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsLayout;
