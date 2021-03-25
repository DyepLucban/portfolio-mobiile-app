import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { globalStyles } from '../../../../assets/styles/global'
import { Formik } from 'formik'

export default function UpdateSkillScreen({ route }) {
  return (
    <View>
        <Formik
          initialValues={{ name: route.params.name }}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {(props) => (
            <View style={globalStyles.skillForm}>
              <TextInput 
                style={globalStyles.skillInputBox}
                value={props.values.name}
                onChangeText={props.handleChange('name')}
              />

              <Button title="Update" onPress={props.handleSubmit} />
            </View>
          )}
        </Formik>
    </View>
  )
}
