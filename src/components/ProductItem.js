import { Image, ScrollView, StyleSheet, Text, View, img } from 'react-native'
import React from 'react'
import images from '../assets/images/image'
import Sizes from '../res/Sizes'

const ProductItem = (props) => {

  const { title, price, salePrice, discerption, rating, img } = props

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
        <Text style={styles.boldText}  >{title}</Text>
        <Text style={styles.fontstyleprice}>{price}</Text>
        {/* <Text style={styles.fontstyleSaleprice}>{salePrice}</Text> */}
        <Text>{rating}</Text>
        {/* <Text style={styles.discerptionST}>{discerption}</Text> */}
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    fontSize: 70,
    fontWeight: 30,
    width: Sizes.screenWidth * 0.35,
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'pink' , 
    justifyContent:'space-between'
  },
   
  img: {
    width: '100%',
    height: 200,
},
  boldText: {
    fontWeight: 'bold',
    color:'black',
    fontSize:20,

  },
  fontstyleprice:
  {
    fontSize: 20,
    color:'black',
    fontWeight: 'bold',
    resizeMode: 'contain',
    alignSelf:'center',
  },
  fontstyleSaleprice:
  {
    fontWeight: 'bold',
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    fontSize: 15,
  },
 /*   discerptionST:
{
    fontSize: 15,
    fontWeight: 'bold',
    resizeMode: 'contain',
    alignSelf: 'flex-start',

  },*/

})