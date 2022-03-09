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
/* Borramos todo e importamos un hook */
const App = () => {
  return (
    /* View = div */
    /*  <View>
       <Text style={{color: "blue", textAlign: "center"}}>Condominios</Text>
       <Text style={{color: "blue", textAlign: "center"}}>Cochasoft</Text>
     </View> */
    <View>
      <Main />
    </View>
  );
};

export default App;
