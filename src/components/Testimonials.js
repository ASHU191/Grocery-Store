import {
    Flex,
    Spacer,
    Text,
    Wrap,
    WrapItem,
    Avatar,
    Box,
    useMediaQuery,
  } from '@chakra-ui/react';
  import React from 'react';
  
  const Testimonials = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  
    return (
      <Flex
        maxWidth={isLargerThanLG ? '1400px' : 'full'}
        minHeight="70vh"
        justifyContent="center"
        alignItems="center"
        py="16"
        px={isLargerThanLG ? '16' : '6'}
        mx="auto"
        flexDirection={isLargerThanLG ? 'row' : 'column'}
      >
        <Flex
          width={isLargerThanLG ? '380px' : 'full'}
          shadow="md"
          minHeight="250px"
          flexDirection="column"
          p="8"
          m="4"
          border="1px solid #C4DDFF"
          borderRadius="md"
          justifyContent="center"
        >
          <Text mb="5">
            "I've been coming to this grocery store for years and I'm always impressed! 
            The produce is always fresh, staff is friendly and helpful, 
            and prices are great. Highly recommend!"
          </Text>
          <Wrap>
            <WrapItem>
              <Avatar
                name="Karl Brighton"
                src="https://sweta-myteam-website-fm.netlify.app/static/media/avatar-kady.78fc482c.jpg"
              />
            </WrapItem>
  
            <WrapItem>
              <Box>
                <Text fontSize="sm">Karl Brighton</Text>
                <Text fontSize="sm" opacity="0.7">
                  Student
                </Text>
              </Box> 
            </WrapItem>
          </Wrap>
        </Flex>
  
        <Spacer />
        <Flex
          width={isLargerThanLG ? '380px' : 'full'}
          shadow="md"
          minHeight="250px"
          flexDirection="column"
          p="8"
          m="4"
          border="1px solid #C4DDFF"
          borderRadius="md"
          justifyContent="center"
        >
          <Text mb="5">
            "I'm so impressed with this grocery store! They have the freshest produce,
             helpful staff, and great prices. Highly recommend!"
          </Text>
  
          <Wrap>
            <WrapItem>
              <Avatar
                name="Karl Brighton"
                src="https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg"
              />
            </WrapItem>
  
            <WrapItem>
              <Box>
                <Text fontSize="sm">Krishna Bells</Text>
                <Text fontSize="sm" opacity="0.7">
                  Product Manager 
                </Text>
              </Box>
            </WrapItem>
          </Wrap>
        </Flex>
        <Spacer />
  
        <Flex
          width={isLargerThanLG ? '380px' : 'full'}
          shadow="md"
          minHeight="250px"
          flexDirection="column"
          p="8"
          m="4"
          border="1px solid #C4DDFF"
          borderRadius="md"
          justifyContent="center"
        >
          <Text mb="5">
            "I had a great experience at your grocery store! It was clean, organized, and had a great selection of products at reasonable prices. 
            The staff was friendly and helpful, and the checkout process was fast and easy. 
            Highly recommend this store!"
          </Text>
          <Wrap>
            <WrapItem>
              <Avatar
                name="Ben Spiff"
                src="https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg"
              />
            </WrapItem>
  
            <WrapItem>
              <Box>
                <Text fontSize="sm">Abdul Azeem</Text>
                <Text fontSize="sm" opacity="0.7">
                  Web Developer
                </Text>
              </Box>
            </WrapItem>
          </Wrap>
        </Flex>
      </Flex>
    );
  };
export default Testimonials