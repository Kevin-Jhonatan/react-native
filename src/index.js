import React from 'react';
import {View, Text} from 'react-native';
import {NativeBaseProvider} from 'native-base';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <HomeScreen />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};
/* <NativeBase />
        <Form /> */
export default App;
