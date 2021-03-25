import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExperienceScreen from '../screens/ExpPage';

const Stack = createStackNavigator();

export default function ExperienceStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Experience' component={ExperienceScreen} />
    </Stack.Navigator>
  )
}
