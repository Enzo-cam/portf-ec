import { Image, Box, Text, Button, Tooltip } from "@chakra-ui/react";
import { SiQuicklook } from "react-icons/si";

const Enzocard = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      gap={5}
      alignItems={{ base: "center", md: "flex-start" }}
    >
      <Image
        border="2px black solid"
        src="/avatar.png"
        borderRadius="full"
        boxSize="180px"
        mb={{ base: 1, md: 0 }} // Add bottom margin on small screens
      />
      <Box textAlign={{base: "center", md:"left"}}>
        <Text fontSize="2.5rem" fontWeight="600">
          Enzo Cámera
        </Text>
        <Text mb={4} fontSize="1.2rem">
          Fullstack Developer, focused in frontend technologies.
        </Text>
        <Box display="flex" alignItems="center" justifyContent={{ base: "center", md: "left" }} gap={4} my={2}>
          <Tooltip
            placement="top"
            hasArrow
            backgroundColor="#5E503F"
            label="Looking for a job"
            fontSize="sm"
            onFocus
          >
            <Text backgroundColor="#C6AC8F" rounded="xl" p={2}>
              <SiQuicklook fontSize="1.3rem" />
            </Text>
          </Tooltip>
          <Button backgroundColor="#5E503F" color="white" _hover="none">
            Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Enzocard;
