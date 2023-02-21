import React from 'react'
import { View, Text, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>Address Book</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2548e2a8',
    padding: 10
  },
  text:{
    fontSize: 30,
    color: '#FFF',
    textAlign:'center'
  }
})
