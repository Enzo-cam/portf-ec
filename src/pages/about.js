import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
} from "@chakra-ui/react";
import Layout from "../../Components/Layout";
import { GiSpaceship } from "react-icons/gi";
import { IoIosCodeWorking } from "react-icons/io";
import ExperienceList from "../../Components/ExperienceList";

const experience = [
  {
    titleJob: "Frontend Developer",
    nameComp: "Risk Of Dev",
    date: "June 2023 - Current",
    responsabilities: [
      "Administration dashboard with React and NextJs for the management of properties, tokens, and menu for user and admin.",
      "Creation of reusable components using good coding practices",
    ],
  },
  {
    titleJob: "Frontend Developer",
    nameComp: "TOB - Group Solutions",
    date: "March 2023 - June 2023",
    responsabilities: [
      "Administration dashboard with React and NextJs for the management of properties, tokens, and menu for user and admin.",
      "Creation of reusable components using good coding practices",
      "Implemented designs created from scratch into the web interface using ChakraUI.",
      "Successfully developed software that allow user to buy properties by tokens and see what they have in their wallet.Improving the better user experience and avoided inconsistencies in the information.",
    ],
  },
];

const About = () => {
  return (
    <>
      <Container maxW={{ base: "100%", sm: "50%", md: "46%" }}>
        <Layout>
          <Box w="full">
            <Box display="flex" alignItems="center" gap={3} mb={6}>
              <GiSpaceship fontSize="2.1rem" />
              <Heading as="h2" size="lg" color="indigo.400">
                About Me
              </Heading>
            </Box>
            <Box display="flex">
              <Text color="gray.700" fontSize="lg" borderRadius="2xl">
                Enzo Cámera from Argentina, a frontend developer based in
                Argentina.
                <br /> I'm a passionate web developer focused in the Frontend
                area but with experience in Backend too, focused in constant
                growth. <br />
                Currently working with mates in our company doing freelance
                projects and also looking for a job in the software industry.
              </Text>
            </Box>
          </Box>

          <Divider mt={8} mb={4} />

          <Box w="full">
            <Box display="flex" alignItems="center" gap={3} mb={4}>
              <IoIosCodeWorking fontSize="2.2rem" />
              <Heading ml={-1} as="h2" size="lg" color="indigo.400">
                Experience
              </Heading>
            </Box>

            <ExperienceList experience={experience} />
          </Box>
        </Layout>
      </Container>
    </>
  );
};

export default About;
