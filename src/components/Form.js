import React, {useState} from 'react';
import {Alert} from 'react-native';
import {Center, Input, FormControl, Stack, Button} from 'native-base';

const Form = () => {
  const [course, setCourse] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Center flex={1}>
      <FormControl isRequired isInvalid>
        <Stack mx={4}>
          <FormControl.Label>¿Cúal tu tecnologías favorita</FormControl.Label>
          <Input
            size="2xl"
            variant="underlined"
            onChangeText={text => setCourse(text)}
            p={2}
            placeholder="Es JS, PHP y ..."
            InputRightElement={
              <Button onPress={() => setShowPassword(!showPassword)}>
                Show
              </Button>
            }
            type={showPassword ? 'text' : 'password'}
          />
        </Stack>
      </FormControl>
      <Button
        style={{marginTop: 10}}
        onPress={() => Alert.alert('Input enviado', course)}>
        Enviar
      </Button>
    </Center>
  );
};

export default Form;
