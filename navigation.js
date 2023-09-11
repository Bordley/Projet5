import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'
import restaurantScreen from './screens/restaurantScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={restaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



