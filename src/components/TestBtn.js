import React, {useEffect, useState} from 'react';
import {View, Button, Alert, Text} from 'react-native';

/* onPress={onPressLearnMore} es un evento igual a onclick
accessibilityLabel="Learn more about this purple button" */
const TestBtn = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter > 20) {
      Alert.alert('Feliciadades ya sabes React Native', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  }, [counter]);

  function increase() {
    console.log('Antes', counter);
    setCounter(counter + 1);
    console.log('Despues', counter);
    console.log(
      'Porque antes y despues tiene el valor de cero esto se debe a que los metodos que se estan ejecutando son asincronos es decir que no se ejecuta en el momento en el que se lo llama sino que pasa un tiempo y recien se ejecuta',
    );
  }
  function decrease() {
    console.log('Antes', counter);
    setCounter(counter - 1);
    console.log('Despues', counter);
  }
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}>
      <Button title="Aumentar +" color="#841584" onPress={increase} />
      <Button title="Descontar -" color="#841584" onPress={decrease} />
      <Text style={{color: 'black', fontSize: 25, textAlign: 'center'}}>
        Contador: {counter}
      </Text>
    </View>
  );
};
export default TestBtn;
