import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';




function App() {

  const [tareas, setTareas] = useState([])



  const crearTarea = (tarea) =>{
    setTareas([...tareas, tarea])
  }

  const eliminarTarea = (id) =>{
    setTareas(tareas.filter((tarea)=>(tarea.id !== id) ))
  }

  return (
    <Flex
    bg={useColorModeValue('gray.100', 'gray.900')}
    align="center"
    justify="center"
    css={{
      backgroundAttachment: 'fixed',
    }}
    id="contact"
    flexDirection={'row'}
    >
    <Box
      borderRadius="lg"
      m={{ base: 5, md: 16, lg: 10 }}
      p={{ base: 5, lg: 16 }}>
      <Box>
        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
          <Heading
            fontSize={{
              base: '4xl',
              md: '5xl',
            }}>
            Todo app
          </Heading>
            <Formulario 
              crearTarea = {crearTarea}
            />          
        </VStack>
      </Box>
    </Box>
    <Stack>
          <Box >
            <Heading>Lista tareas</Heading>
          </Box>
          <Box>
            {
              tareas.map( (tarea) =>(
                <Resultado
                  key={tarea.id}
                  tarea={tarea} 
                  eliminarTarea={eliminarTarea}
                />
              ))
            }
          </Box>        

    </Stack>
  </Flex>
  );
}

export default App;




