import '@/styles/globals.css'
import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`,
    body: `'Plus Jakarta Sans', sans-serif`,
  },
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={{ base: "100%", sm:"50%", md: "43%" }}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}
