import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../src/screens/Home';
import Splash from '../src/screens/Splash';
import ScreenNames from './ScreenNames';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.splash} component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name={ScreenNames.home} component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
