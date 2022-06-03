import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

export type DrawerStackParams = {
  HomeScreen: undefined,
  ProfileScreen: undefined
}

const Drawer = createDrawerNavigator<DrawerStackParams>();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false
      }}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}