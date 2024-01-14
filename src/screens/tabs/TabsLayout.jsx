import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Social" component={Social} />
      <Tab.Screen name="FAQ" component={FAQ} />
    </Tab.Navigator>
  );
};

export default TabsLayout;
