import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { globalStyles } from '../../../assets/styles/global';

export default function AddSkillButton(props) {
	const modalHandler = () => {
		console.log(props)
	}

	return (
		<View style={globalStyles.skillAddButtonContainer}>
			<TouchableOpacity style={globalStyles.skillAddButtonHolder} onPress={modalHandler}>
				<FontAwesome name='pencil' size={25} style={globalStyles.skillAddButtonIcon}/>
				<Text style={globalStyles.skillAddButtonText}>Add</Text>
			</TouchableOpacity>
		</View>
	)
}
