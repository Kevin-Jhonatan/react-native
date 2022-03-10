import React from 'react';
/**
 * Es importante importar el componente de Images
 * para poder usar el componente
 */
import {View, Image} from 'react-native';
/**
 * Tenemos que tener mucho cuidado a la hora de
 * manejar las rutas ya que el editor nos ayuda pero no pone
 * la extension de la imagen en este caso
 */
const TestImage = ({type, imageName}) => {
  return (
    <View>
      <Image
        style={{width: '100%', height: 300}}
        source={
          type === 'local'
            ? require('../assets/images/perfil-cochasoft.png')
            : {uri: imageName}
        }
      />
    </View>
  );
};

export default TestImage;
