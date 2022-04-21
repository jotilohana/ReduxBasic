import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../src/screens/home';
import Home2 from '../src/screens/home2';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Home2" component={Home2} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MyStack} />
      <Tab.Screen name="Settings" component={Home2} />
    </Tab.Navigator>
  );
}

export default MyTabs;
