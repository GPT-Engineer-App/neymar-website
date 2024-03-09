import React from "react";
import { Box, Container, Heading, Text, VStack, Image, Link, Button, SimpleGrid, Icon, Flex, Spacer } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaTrophy } from "react-icons/fa";

const socialLinks = {
  instagram: "https://instagram.com/neymarjr",
  twitter: "https://twitter.com/neymarjr",
  facebook: "https://www.facebook.com/neymarjr",
  youtube: "https://www.youtube.com/user/neymarjr",
};

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={4} as="header" mt={10} textAlign="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1529629468183-b9cddd7be13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxOZXltYXJ8ZW58MHx8fHwxNzA5OTkwNjkyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Neymar" />
        <Heading as="h1" size="2xl">
          Neymar Jr.
        </Heading>
        <Text fontSize="xl">Professional Football Player</Text>
        <Flex w="full" justify="center">
          {Object.entries(socialLinks).map(([key, value]) => (
            <Link key={key} href={value} isExternal mx={2}>
              <Icon as={FaInstagram} w={8} h={8} _hover={{ color: "blue.500" }} />
            </Link>
          ))}
        </Flex>
      </VStack>

      <VStack spacing={8} as="main" my={10}>
        <Heading as="h2" size="xl">
          About Me
        </Heading>
        <Text fontSize="lg" maxW="2xl">
          Neymar da Silva Santos Júnior, known as Neymar, is a Brazilian professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the Brazil national team. He is known for his dribbling, finishing, and skill.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box as="section">
            <Heading as="h3" size="lg">
              Achievements
            </Heading>
            <VStack align="start" spacing={3}>
              <Text as="span">🏆 Champions League Winner</Text>
              <Text as="span">🥇 Olympic Gold Medalist</Text>
              <Text as="span">🎖️ Copa Libertadores Winner</Text>
            </VStack>
          </Box>
          <Box as="section">
            <Heading as="h3" size="lg">
              Contact
            </Heading>
            <VStack align="start" spacing={3}>
              <Text as="span">📧 Email: contact@neymarjr.com</Text>
              <Text as="span">📞 Phone: +55 21 1234 5678</Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </VStack>

      <Box as="footer" py={10}>
        <Flex align="center">
          <Box>
            <Heading as="h2" size="xl">
              Neymar Jr.
            </Heading>
            <Text>© 2023 All rights reserved.</Text>
          </Box>
          <Spacer />
          <Button leftIcon={<FaTrophy />} colorScheme="yellow" variant="solid">
            View Trophies
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
