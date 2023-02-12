import { Box, Button, Heading, Image, Text,  } from "@chakra-ui/react";

export default function Card({ title, text, img  }) {
  return (
    <Box maxW="220px" bg="white" p="4" bgColor={"gray.50"}>
      <Image
        src={img}
        alt="Meat"
        borderRadius="lg"
        objectFit="cover"
        mx="auto"
      />

      <Heading my="4" size="sm">
        {title}
      </Heading>
      <Text fontSize={"sm"} >
        Category: {text}
      </Text>
      
    <Box Wrap={50}>
      <Button colorScheme="blue" mt={4} size="sm" >
        Add to Cart
      </Button>
      <Button colorScheme="green" mt={4} size="sm" >
        PKR 100
      </Button>
      </Box>
    </Box>
  );
}