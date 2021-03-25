import React from 'react';
import { View, Text, TextInput, Button, Modal, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { globalStyles } from '../../../assets/styles/global'
import { Formik } from 'formik'

export default function UpdateSkillModal(props) {

	const WIDTH = Dimensions.get('window').width

	const closeModal = () => {
		props.setModalStatus(false)
	}

  return (
    <Modal visible={props.modalStatus} animationType="slide" transparent={true}> 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(52, 52, 52, 0.9)'}}>
        <View style={{ height: 170, width: WIDTH - 80, backgroundColor: 'white' }}>
          <View style={{ marginLeft: 20, marginTop: 10 }}>
            <TouchableOpacity onPress={closeModal}>
              <View>
                <FontAwesome name='close' size={25}/>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Formik
              initialValues={{ name: '' }}
              onSubmit={(values) => {
                AddSkill(values)
              }}          
            >
              {(props) => (
                <View style={globalStyles.skillForm}>
                  <TextInput 
                    style={globalStyles.skillInputBox}
                    value={props.values.name}
                    onChangeText={props.handleChange('name')}
                    placeholder='Skill name'
                  />

                  <Button title="Update" onPress={props.handleSubmit} />
                </View>              
              )}
            </Formik>
          </View>          
        </View>
      </View>
    </Modal>
  )
}
