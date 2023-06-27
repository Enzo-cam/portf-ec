import { Container, Divider } from "@chakra-ui/react";
import Layout from "../../Components/Layout";
import Enzocard from "../../Components/Enzocard";
import Projects from "../../Components/Projects";
import Socials from "../../Components/Socials";

const projects = [
  {
    name: "EducaIT",
    description:
      "Is a website to search for best courses of development, guides, utils and more.",
    technologies: ["next", "typeScript", "mongo", "tailwind"],
  },
  {
    name: "RecipeHub",
    description: "Website to find the best recipes based in your ingredients.",
    technologies: ["next", "typeScript", "mongo", "chakraUI", "nestJS"],
  },
];

const socials = [
  {
    red: 'Linkedin',
    url: 'https://www.linkedin.com/in/enzo-camera/',
    icon: 'linkedin'
  },
  {
    red: 'Github',
    url: 'https://github.com/EnzoCam7',
    icon: 'github'
  },
  {
    red: 'Gmail',
    url: 'https://github.com/EnzoCam7',
    icon: 'gmail'
  }
]

export default function Home() {
  return (
    <>
      <Container maxW={{ base: "100%", sm: "50%", md: "46%" }}>
        <Layout>
          <Enzocard />
          <Divider />
          <Projects projects={projects} />
          <Divider />
          <Socials socials={socials} />
        </Layout>
      </Container>
    </>
  );
}
