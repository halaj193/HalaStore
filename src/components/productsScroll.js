import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductItem from './ProductItem';

const ProductsScroll = (props) => {

  const data = props.data;
  const { title, products } = data

  const renderProducts = () => {
    return products.map(product => <ProductItem {...product} />)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titlets}>{title}</Text>
      <ScrollView horizontal style={styles.ScrollView} >
        {renderProducts()}
      </ScrollView>
    </View>
  )
}

export default ProductsScroll
const styles = StyleSheet.create({
  container: {
    // paddingLeft: 20 , 
    marginBottom: 20,
  },
  titlets:{
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 20,
    textAlign: 'center',
    marginBottom: 2,
    color: 'black',
    backgroundColor: 'green',
  }, 
  ScrollView:{
    // width:'50%'
  }

})