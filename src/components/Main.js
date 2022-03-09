import React from 'react';
import {View, Text} from 'react-native';
/* Hook es un metodo que puede tener logica y tiene un estado
 * y devuelve una vista con return
 * este es un componente creado
 */
const Main = () => {
  return (
    <View>
      <Text style={{color: 'blue', textAlign: 'center'}}>
        Bienvenidos a condominios
      </Text>
    </View>
  );
};

export default Main;
