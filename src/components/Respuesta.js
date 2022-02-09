import React from 'react';
import {
  Box,
  Text,
  Flex,
  Button,
 
} from '@chakra-ui/react';


const Respuesta = ({tarea, EliminarTarea}) => {
    
    const deleteTarea = () => {
        EliminarTarea(tarea.id);
    }

    return ( 
        <Flex>
            <Box borderBottom={'4px'}>
                <Text>nombre: {tarea.nombre}</Text>
                <Text>mensaje: {tarea.mensaje}</Text>
                <Button onClick={deleteTarea}>Eliminar</Button>
            </Box>
        </Flex>
        
     );
}
 
export default Respuesta;