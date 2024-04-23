import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Ad = (props) => {

    return (
        <View style={styles.Ad}>
            <Text>Adds</Text> 
            
        </View>
    )

}

export default Ad

const styles = StyleSheet.create({
    Ad: { 
        borderWidth:3,
        fontWeight: 20, 
        width:'96%',
        alignItems: 'center',
        padding: 5, 
        alignSelf:'center'
    }
})