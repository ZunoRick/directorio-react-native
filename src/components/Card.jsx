import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'

export const Card = ({ contacto }) => {
  const { first_name, last_name, phone, email, gender } = contacto

  const handlePress = (name) => {
    console.log('Presionó en: '+ name)
    Alert.alert('Presionó en: '+ name)
  }

  return (
    <View style={[ styles.container,
      gender == 'Male' ? styles.styleMale : styles.styleFemale
     ]}>
      <Text style={ styles.contactoName }>
        { first_name+' '+last_name }
      </Text>

      <Text style={ styles.contactoinfo }>
        Phone Number: { phone }
      </Text>

      <Text style={ styles.contactoinfo }>
        Email: { email }
      </Text>
      
      <TouchableOpacity 
        style={ styles.button }
        onPress= { () => { handlePress( first_name+' '+last_name ) }}
      >
        <Text style={ styles.textButton }>Click</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 12,
    margin: 6,
  },
  contactoName:{
    fontSize: 25,
    color: '#3a3939',
    fontWeight: 'bold'
  },
  contactoinfo: {
    fontSize: 18,
    color: '#747272',
    margin: 2
  },
  button:{
    padding: 6,
    backgroundColor: '#667de4ff',
    marginTop: 5
  },
  textButton:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 15
  },
  styleMale:{
    backgroundColor: '#b9d5fa'
  },
  styleFemale:{
    backgroundColor: '#fdc6eb'
  }
})
