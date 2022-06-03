import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/Auth/LoginScreen';
import { DrawerNavigation } from './DrawerNavigation';
import { AuthContext } from '../context/AuthContext';

export type InitialStackParams = {
  LoginScreen: {user:string, password:string},
  DrawerNavigation: undefined
}

const Stack = createStackNavigator<InitialStackParams>();

export const Navigator = () => {

  const { status } = useContext( AuthContext );


  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >

      {
        (status !== 'authenticated')
          ? (
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          ) : (
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
          )
      }
    </Stack.Navigator>
  );
}