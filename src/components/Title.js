/**
 * Ahora le damos un estado a nuestro componente importanto
 * useState que hace useState define una variable que va a cambiar
 * de estado dentro de un hook ,
 * pero recordemos que puede tener una lista de eventos,
 * objeto, boolean,
 */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
/**
 *
 * @param {*} param0
 * @returns
 */
/**
 * Lo que se hizo en esta parte es crear un nuevo
 * componente llamado title pero en este caso de pasamos
 * por parametro el valor de la variable name
 * desde el index.js dentro de src/ lo interpolamos donde
 * queremos que se vea
 */
const Title = ({name}) => {
  /**
   * Se pondra un texto y se necesita una funcion o metodo
   * para setear el texto y el useState es un metodo que va a
   * obtener como primer parametro la inicializacion de la variable
   * es decir el valor por defecto de la variable que se creó
   * en este caso como es un string le vamos a poner un string por defecto
   * -> State y el nombre de la variable puede tener cualquier nombre.
   * setTex nos ayuda a setear o darle un valor a nuestra variable
   * invocandole y pasandole una propiedad o un texto en este caso
   * Title y Main son componentes de tipo hook ya que los hooks son
   * o es lo nuevo pero estos nos sirven mas para cosas mas simples
   * o sencilla o menos  y el class lo usamos para algo mas complejo
   */
  const [text, setTex] = useState('Propiedad -->');
  /**
   * Tambien es importante notar que en los hooks no existen la palabra
   * reservada this pero si es necesarios en las clases y todo tiene
   * que estar dentro del hook.
   * Esta propiedad es como una constante que se repiten en todos los
   * datos
   */
  return (
    <View>
      <Text>{text}</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default Title;
