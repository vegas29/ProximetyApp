import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ProductScreen } from '../screens/ProductScreen';

export type DrawerStackParams = {
  HomeScreen: undefined,
  ProfileScreen: undefined,
  ProductScreen: {id?:string, title?:string, image?:string, longDescription?:string}
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
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={() => ({title: "Home"})} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} options={() => ({title: "Perfil"})} />
      <Drawer.Screen name="ProductScreen" component={ProductScreen} options={() => ({title: "Producto"})} />
    </Drawer.Navigator>
  );
}