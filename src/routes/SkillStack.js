import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SkillScreen from '../screens/SkillsPage';
import AddSkillButton from '../components/Skills/AddSkillButton';

export default function SkillStack() {

	const Stack = createStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Skills"
				component={SkillScreen}
				// options={{
				// 	headerRight: () => (<AddSkillButton />)
				// }}
			/>
		</Stack.Navigator>		
	)
}
