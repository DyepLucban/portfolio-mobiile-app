import React, { useState } from 'react'
import { View, Text, Modal, Button, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { globalStyles } from '../../../assets/styles/global'
import { Formik } from 'formik'
import { skillsApi } from '../../api/skills'

export default function AddSkillModal(props) {

  console.log(props, 'addskillmodal')

	const WIDTH = Dimensions.get('window').width
  const closeModal = () => {
    props.setModalStatus(false)
  }

  const AddSkill = async (values) => {
    await skillsApi.post(values).then((res) => {
      props.setSkills([res, ...props.skills])
      // props.setStatus(false)
    }).catch((error) => {
      console.log(error)
    })
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

                  <Button title="Add Skill" onPress={props.handleSubmit} />
                </View>              
              )}
            </Formik>
          </View>          
        </View>
      </View>
    </Modal>
  )
}
