import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectScreen from '../screens/ProjectPage';

const Stack = createStackNavigator();

export default function ProjectStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Projects' component={ProjectScreen} />
    </Stack.Navigator>
  )
}
