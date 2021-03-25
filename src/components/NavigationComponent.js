import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeStack from '../routes/HomeStack';
import SkillStack from '../routes/SkillStack';
import ExperienceStack from '../routes/ExperienceStack';
import ProjectStack from '../routes/ProjectStack';
import OtherStack from '../routes/OtherStack';

export default function NavigationComponent() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ keyboardHidesTabBar: true }}>
        <Tab.Screen
          name="Home"
          component={ HomeStack }
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Skills"
          component={ SkillStack }
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="code" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Experience"
          component={ ExperienceStack }
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="briefcase" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Projects"
          component={ ProjectStack }
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="folder-o" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Others"
          component={ OtherStack }
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="ellipsis-h" color={color} size={size} />
            )
          }}
        />        
      </Tab.Navigator>
    </NavigationContainer>
  )
}
