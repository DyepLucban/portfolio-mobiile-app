import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Modal } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { globalStyles } from '../../assets/styles/global'
import { skillsApi } from '../api/skills'
import UpdateSkillModal from '../components/Skills/UpdateSkillModal'
import AddSkillModal from '../components/Skills/AddSkillModal'
import AddSkillButton from '../components/Skills/AddSkillButton'

export default function Skills () {
  const [skills, setSkills] = useState([])
  const [updateModalStatus, setUpdateModalStatus] = useState(false)
  const [addModalStatus, setAddModalStatus] = useState(false)
  

  console.log(addModalStatus, 'skillspage')

  useEffect(() => {
    browseSkills()
  }, [])

  const browseSkills = async () => {
    skillsApi.browse().then((response) => {
      setSkills(response)
    })
  }

  const DeleteSkill = () => {
    setModalStatus(false)
  }
  
  const openUpdateModal = () => {
    setUpdateModalStatus(true)
  }

  return (
    <SafeAreaView>
      <View>
        <AddSkillButton addModalHandler={setAddModalStatus} />
        <UpdateSkillModal modalStatus={updateModalStatus} setModalStatus={setUpdateModalStatus} />
        <AddSkillModal skills={skills} setSkills={setSkills} modalStatus={addModalStatus} setModalStatus={setAddModalStatus} /> 
        <FlatList
          data={skills}
          keyExtractor={(item) => item.id.toString() }
          renderItem={({ item }) => (
            <View style={globalStyles.skillContainer}> 
              <Text style={globalStyles.skillItem}>{item.name}</Text>
              <View style={globalStyles.skillButtonContainer}>
                <TouchableOpacity
                  style={globalStyles.skillButton}
                  onPress={DeleteSkill}
                >
                  <FontAwesome name="trash" style={{ fontSize: 25 }}/>
                </TouchableOpacity>
                <TouchableOpacity
                  style={globalStyles.skillButton}
                  onPress={openUpdateModal}
                >
                  <FontAwesome name="edit" style={{ fontSize: 25 }}/>
                </TouchableOpacity>
              </View>  
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}
