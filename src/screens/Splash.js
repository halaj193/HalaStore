import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ScreenNames from '../../routes/ScreenNames';
const Splash = props => {
  console.log('can go back? ', props.navigation.canGoBack());

  const navigateHome = () => {
    setTimeout(() => {
      props.navigation.replace(ScreenNames.home);
    }, 2 * 1000);
  };

  useEffect(() => {
    navigateHome();
  }, []);

  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>HalaStore</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',  
    
  },
});

export default Splash;
