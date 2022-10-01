import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home'
import Fave from './Screens/Fave'
import { store } from "./app/store";
import { Provider } from "react-redux";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
       <Tab.Navigator  screenOptions={{
    tabBarStyle: { position: 'absolute' },
    headerShown: false,
  }}>
      <Tab.Screen name="All Cats" component={Home} />
      <Tab.Screen name="Cats I Like" component={Fave} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}