import { Box, Text, Stack, Button, Image, useBreakpointValue, Link } from '@chakra-ui/react';

const Socials = ({socials}) => {
    const buttonWidth = useBreakpointValue({ base: "100%", md: "20%" });
    
    const handleClick = (url) => {
      window.open(url, '_blank');
    };
    return (
      <Box>
        <Text fontSize="2rem" mt={6} mb={2} fontWeight="600" color="#5E593M" textAlign={{base: 'center', md: 'left'}}>
          Contact with me
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mb={6}>
          {socials.map(social => (
            <Button
              variant="outline"
              w={buttonWidth}
              fontSize="lg"
              onClick={() => handleClick(social.url)}
            >
              <Image
                w={30}
                src={`/${social.icon}.svg`}
                alt="Vercel Logo"
                mr={2}
              />
              {social.red}
            </Button>
          ))}
        </Stack>
      </Box>
    )
}

export default Socials