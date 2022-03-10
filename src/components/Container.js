/**
 * Para crear una clase necesitamos importar {Component}
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
/**
 * Componentes de clase
 */

class Container extends Component {
  /**
   * Asi definimos el estado de un componente de clase
   * vemos que es un objeto y la forma de mostrarlo esta dentro
   * el tag de Text
   * aparte siempre tenemos que tener el metodo render y devolver
   * o retornar una vista esto tanto para hooks y componentes de clase
   * tiene un state interno y no es externo
   */
  state = {
    title: 'Contenedor',
    component: 'Es un componente de class',
  };
  render() {
    return (
      <View>
        <Text>{this.state.title}</Text>
        <Text>{this.state.component}</Text>
      </View>
    );
  }
}

export default Container;
