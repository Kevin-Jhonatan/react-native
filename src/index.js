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
} from 'react-native';
import Main from './components/Main';
import Title from './components/Title';
import Container from './components/Container';
import TestImage from './components/TestImage';

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
    <View>
      <TestImage type="local" />
      <TestImage
        type="internet"
        imageName="https://reactnative.dev/img/tiny_logo.png"
      />
      <Main />
      <Title name="JavaScript 1 Name parametro de Title" />
      <Title name="JavaScript 2 Name parametro de Title" />
      <Title name="JavaScript 3 Name parametro de Title" />
      <Container />
    </View>
  );
};

export default App;
