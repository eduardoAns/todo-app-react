import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  Textarea,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import Respuesta from './components/Respuesta';
import { v4 } from 'uuid';




function App() {

  
  //arreglo(array) de tareas
  const [tareas, setTareas] = useState([]);
  
  const [tarea, setTarea] = useState({
    nombre:'',
    mensaje:'',
  });

  //extraer valores

  const {nombre, mensaje} = tarea;

  // funcion que se ejcuta cada vez que se escribe en un input

  const handleChange = (e) => {
    setTarea({
        ...tarea,
        [e.target.name]: e.target.value
    })
        console.log(e.target)
  }


   // funcion que tome las citas actuales y agregue la nueva
  const crearTarea = (task) =>{
    setTareas([task,...tareas])
  }

  //funcion que elimina cita segun id
  const EliminarTarea = (id) =>{
    const nuevaTarea = tareas.filter(tarea => tarea.id !== id )
    setTareas(nuevaTarea);
  }

  const submitTarea = (e) => {

        e.preventDefault();

        tarea.id = v4();

    //crear una cita
        crearTarea(tarea);
        console.log('se creo la tarea')

    //reiniciar el form

        setTarea({
          nombre:'',
          mensaje:'',
        })
    

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

          <Stack
            spacing={{ base: 4, md: 8, lg: 20 }}
            direction={{ base: 'column', md: 'row' }}>
            <Box
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="lg"
              p={8}
              color={useColorModeValue('gray.700', 'whiteAlpha.900')}
              shadow="base">
              <VStack spacing={5}>

              <form
                onSubmit={submitTarea}
              >
                
                <FormControl isRequired>
                  <FormLabel>Nombre </FormLabel>

                  <InputGroup>
                    <Input 
                      autoFocus
                      type="text" 
                      name="nombre" 
                      placeholder="tu nombre" 
                      onChange={handleChange} 
                      value={nombre}
                    />
                  </InputGroup>
                </FormControl>


                <FormControl isRequired>
                  <FormLabel>Tarea</FormLabel>

                  <Textarea
                    name="mensaje"
                    placeholder="tu mensaje"
                    rows={6}
                    resize="none"
                    onChange={handleChange}
                    value={mensaje}
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  bg="blue.400"
                  color="white"
                  _hover={{
                    bg: 'blue.500',
                  }}
                  isFullWidth
                  >
                  Agregar
                </Button>

              </form>
              </VStack>
            </Box>
          </Stack>
          
        </VStack>

        
      </Box>
    </Box>
    <Stack>
          <Box>
            <Heading>Lista tareas</Heading>
          </Box>
          {tareas.map(tarea =>(
                <Respuesta 
                  key = {tarea.id}
                  tarea = {tarea}
                  EliminarTarea = {EliminarTarea}
                />

              ))}

    </Stack>
  </Flex>
  );
}

export default App;




