import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Footer = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>App Ricardo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    padding: 20,
    bottom: 1,
    width: 410,
    backgroundColor: '#ddd9d9'
  },
  text:{
    textAlign: 'center',
    color: '#1a1717'
  }
})