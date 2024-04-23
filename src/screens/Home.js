import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ScreenNames from '../../routes/ScreenNames'
import Btn from '../components/Btn'
import ProductsScroll from '../components/productsScroll'
import { homeData } from '../res/data'
import Ad from '../components/Ad'
const Home = (props) => {
    const navigateHome = () => {
        props.navigation.navigatt('')
    }

    const renderHomeData = () => {
        const productsScrolles = homeData.map(homeItem => {
            return (<ProductsScroll data={homeItem} />)
        })

        return productsScrolles ;
    }

    return (
        <View style={styles.container}>
            <ScrollView>
            {renderHomeData()} 
            <Ad></Ad>
            </ScrollView>
        </View>
    )

}
const styles = StyleSheet.create({
    btn: {
        margin: 10,
        marginLeft: 30, 
        }

})

export default Home
