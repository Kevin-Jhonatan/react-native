/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  /* Estos son los 2 componentes mas basicos que existen en el desarrollo movil */
  Text,
  View,
  ScrollView,
} from 'react-native';
import Main from './components/Main';
import Title from './components/Title';
import Container from './components/Container';
import TestImage from './components/TestImage';
import TestInput from './components/TestInput';
import TextMultiline from './components/UselessTextInputMultiline';
import TestBtn from './components/TestBtn';
import {Box, Center} from 'native-base';

/* Borramos todo e importamos un hook s*/
const App = () => {
  return (
    /* View = div */
    /*  <View>
       <Text style={{color: "blue", textAlign: "center"}}>Condominios</Text>
       <Text style={{color: "blue", textAlign: "center"}}>Cochasoft</Text>
     </View> 
     ^*******
     * ojo que ahora le pasaremos por parametro la imagen y usamos el operador
     * ternario
     */
    <ScrollView>
      <TestBtn />
      {/* <UselessTextInputMultiline /> */}
      <TestInput />
      <TestImage type="local" />
      <TestImage
        type="internet"
        imageName="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
      />
      <TestImage
        type="internet"
        imageName="https://reactnative.dev/img/tiny_logo.png"
      />
      <Main />
      <ScrollView horizontal>
        <Title name="JavaScript 1 Name parametro de Title" />
        <Title name="JavaScript 2 Name parametro de Title" />
        <Title name="JavaScript 3 Name parametro de Title" />
      </ScrollView>
      <Container />
    </ScrollView>
  );
};

export default OldApp;
