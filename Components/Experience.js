import { Box, Heading, Text, ListItem, UnorderedList } from '@chakra-ui/react';

  export const Experience = ({
    titleJob,
    date,
    nameCompany,
    responsabilities
  }) => {
    return (
        <Box display="flex" flexDirection="column" gap={5} mb={4}>
        <Box display="flex" flexDirection="column" gap={1}>
          <Heading as="h2" fontSize="lg" fontWeight="semibold" color="gray.700">
            {titleJob} | {nameCompany}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {date}
          </Text>
        </Box>
        <UnorderedList spacing={2} ml={6} color="gray.700" fontSize="lg">
          {responsabilities.map(resp => (
            <ListItem>
              {resp}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    )
  }
  