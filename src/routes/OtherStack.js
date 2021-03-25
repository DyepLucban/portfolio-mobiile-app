import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OtherScreen from '../screens/OtherPage';

const Stack = createStackNavigator();

export default function OthersStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Others' component={OtherScreen} />
    </Stack.Navigator>
  )
}
