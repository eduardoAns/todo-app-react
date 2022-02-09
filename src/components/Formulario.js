import React, { useState } from 'react';
import { v4 } from 'uuid';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Stack,
    Textarea,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';


const Formulario = ({crearTarea}) => {

   const [tarea, setTarea]= useState({
       nombre:'',
       mensaje:'',
   })

   const {nombre, mensaje} = tarea;

   const handleInput = (e) => {


       
       setTarea({
           ...tarea,
           [e.target.name]:e.target.value
       })

       console.log(tarea)

   }

   const handleSubmit = (e) => {
        e.preventDefault()

        crearTarea(tarea);

        tarea.id = v4();

        setTarea({
            nombre:'',
            mensaje:'',
        })
   }






    return ( 
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
                onSubmit={handleSubmit}
              >
                
                <FormControl isRequired>
                  <FormLabel>Nombre </FormLabel>

                  <InputGroup>
                    <Input 
                      autoFocus
                      name="nombre"
                      value={nombre}
                      type="text"             
                      placeholder="tu nombre" 
                      onChange={handleInput}                        
                    />
                  </InputGroup>
                </FormControl>


                <FormControl isRequired>
                  <FormLabel>Tarea</FormLabel>

                  <Textarea
                    placeholder="tu mensaje"
                    rows={6}
                    resize="none"
                    name="mensaje"
                    value={mensaje}
                    onChange={handleInput}

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

     );
}
 
export default Formulario;