import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Box
} from "@chakra-ui/react";

const Projects = ({ projects }) => {
  return (
    <>
    <Text fontSize="2rem" mt={2} fontWeight="600" color="#5E593M">Projects</Text>
        {projects.map((project) => (
            <Box py={6} key={project.name}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w="100%"
                height={{ sm: "476px", md: "20rem" }}
                direction={{ base: "column", md: "row" }}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                padding={4}
            >
                <Flex flex={1} bg="blue.200">
                <Image
                    objectFit="cover"
                    boxSize="100%"
                    src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKh9m1l0csFoh9OYn70_QAjxW6Jk8MyKVSEA&usqp=CAU"
                    }
                />
                </Flex>
                <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                //   alignItems="center"
                p={1}
                pt={2}
                >
                <Heading mt={2} fontSize={"2xl"} fontFamily={"body"}>
                    {project.name}
                </Heading>

                <Text
                    // textAlign={"center"}
                    color={useColorModeValue("gray.700", "gray.400")}
                    // px={3}
                >
                    {project.description}
                </Text>
                <Stack
                    align={"center"}
                    justify={"center"}
                    direction={"row"}
                    mt={4}
                >
                    {project.technologies.map(technologie => (    
                        <Badge
                        px={1}
                        py={1}
                        bg={useColorModeValue("white")}
                        key={technologie}
                        >
                            <Image w={30} src={`/${technologie}.svg`} alt="Vercel Logo" />
                        </Badge>
                    ))}
                    
                </Stack>

                <Stack
                    width={"80%"}
                    mt={"2rem"}
                    direction={"row"}
                    padding={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"md"}
                    _focus={{
                        bg: "gray.200",
                    }}
                    >
                    Code
                    </Button>
                    <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"md"}
                    bg={"#5E503F"}
                    color={"white"}
                    boxShadow={
                        "0px 1px 10px -5px black"
                    }
                    _hover={{
                        bg: "#5E503F",
                    }}
                    _focus={{
                        bg: "#5E503F",
                    }}
                    >
                    Live
                    </Button>
                </Stack>
                </Stack>
            </Stack>
            </Box>
        ))}
    </>
  );
};

export default Projects;
