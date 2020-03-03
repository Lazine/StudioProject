import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TodolistScreen from '../screens/todoList';
import DetailsScreen from '../screens/detail';
import TabOne from '../screens/TabOne';
import TabTwo from '../screens/TabTwo';
import MainModal from '../screens/MainModal';
import Modal from '../screens/Modal';


const ModalStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function MainModalScreen() {
  return (
    <ModalStack.Navigator mode="modal" headerMode="none">
      <ModalStack.Screen name="MainModal" component={MainModal}/>
      <ModalStack.Screen name="Modal" component={Modal}/>
    </ModalStack.Navigator>
  );
}


function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabOne" component={TabOne} />
      <Tab.Screen name="TabTwo" component={TabTwo} />
    </Tab.Navigator>
  );
}


function AppContainer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Todo">
        <Stack.Screen name="Todo" component={TodolistScreen} />
        {/* <Stack.Screen 
          name="Detail" 
          component={DetailsScreen}  
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="MainModalScreen" component={MainModalScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default AppContainer;