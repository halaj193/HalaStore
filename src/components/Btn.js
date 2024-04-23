import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Btn = (props) => {
  return (
    <TouchableOpacity style={styles.btn}  onPress={props.onPress}>
        <Text>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Btn

const styles = StyleSheet.create({
    btn:{
        borderWidth:1 , 
        borderRadius: 80,
        
    }
})