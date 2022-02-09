import React from 'react';
import {
    Text,
    Stack,
    Button,
  } from '@chakra-ui/react';

  const Resultado = ({tarea, eliminarTarea}) => {
      return ( 
          <Stack borderBottom={'4px'} minH={'80px'} w={'full'} mb={'1rem'}>
              <Text fontSize={'18px'}>Nombre : {tarea.nombre} </Text>
              <Text fontSize={'18px'} c>Mensaje : {tarea.mensaje} </Text>
              <Button onClick={() => eliminarTarea(tarea.id)}>Eliminar</Button>
          </Stack>
       );
  }
   
  export default Resultado;