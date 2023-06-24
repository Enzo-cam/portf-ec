import { Box, Heading, Text } from '@chakra-ui/react';

  export const Experience = ({
    titleJob,
    date,
    nameCompany,
    children
  }) => {
    return (
        <Box display="flex" flexDirection="column" gap={5} mb={4}>
        <Box display="flex" flexDirection="column" gap={1}>
          <Heading as="h2" fontSize="lg" fontWeight="semibold" color="gray.700">
            {titleJob} - {nameCompany}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {date}
          </Text>
        </Box>
        {children}
      </Box>
    )
  }
  