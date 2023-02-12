import {
    Flex,
    Spacer,
    Image,
    Text,
    Button,
    useMediaQuery,
  } from '@chakra-ui/react';
  import React from 'react';
  import teamImage from '../assets/teamImage.jpg';
  
  const Services = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  
    return (
      <Flex
        width="full"
        minHeight="70vh"
        alignItems="center"
        px={isLargerThanLG ? '16' : '6'}
        py="16"
        justifyContent="center"
        flexDirection={isLargerThanLG ? 'row' : 'column'}
      >
        <Flex
          w={isLargerThanLG ? '40%' : 'full'}
          mb={isLargerThanLG ? '0' : '6'}
          alignItems="center"
          justifyContent="center"
        >
          <Image src={teamImage} alt="Chakra Team" w="full" />
        </Flex>
        <Spacer />
        <Flex
          w={isLargerThanLG ? '60%' : 'full'}
          flexDirection="column"
          ml={isLargerThanLG ? '7' : '0'}
        >
          <Text fontSize={isLargerThanLG ? '5xl' : '4xl'} fontWeight="bold">
          We take care of your needs.
        </Text>
  
          <Text mb="6" opacity="0.8">
          Best quality groceries at a cheaper rate for everyone to enjoy.
           Happiness lies in buying the best quality groceries. 
           Every product is made with love.
          </Text>
  
          <Button width="200px" size="lg" colorScheme="blue">
            ORDER NOW
          </Button><br/><br/><br/><br/><br/><br/>
          <Button width="300px" size="lg" colorScheme="yellow">Customer Reviews</Button>
      
        </Flex>
      </Flex>
    );
  };
  
  export default Services;