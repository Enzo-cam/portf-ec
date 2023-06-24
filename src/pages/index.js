import { Inter } from 'next/font/google'
import Layout from '../../Components/Layout'
import Enzocard from '../../Components/Enzocard'
import { Container, Divider } from '@chakra-ui/react'
import Projects from '../../Components/Projects'

const inter = Inter({ subsets: ['latin'] })

const projects = [
  {
    name: 'EducaIT',
    description: 'Is a website to search for best courses of development, guides, utils and more.',
    technologies: ['next', 'typeScript', 'mongo', 'tailwind'],
  },
  {
    name: 'RecipeHub',
    description: 'Website to find the best recipes based in your ingredients.',
    technologies: ['next', 'typeScript', 'mongo', 'chakraUI', 'nestJS'],
  },
];

export default function Home() {
  return (
    <>
      <Container maxW={{ base: "100%", sm:"50%", md: "46%" }}>
        <Layout>
          <Enzocard />
          <Divider />
          <Projects 
            projects={projects}
          />
        </Layout>
      </Container>
    </>
  )
}
