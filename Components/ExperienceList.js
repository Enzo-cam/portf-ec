import { Experience } from "./Experience";
import { Box } from "@chakra-ui/react";


const ExperienceList = ({experience}) => {
    return (
        <Box display="flex" flexDirection="column" gap={5} mb={4}>
            {experience.map(exp => (
                <Experience
                    titleJob={exp.titleJob}
                    nameCompany={exp.nameComp}
                    date={exp.date}
                    responsabilities={exp.responsabilities}
                />
            ))}
        </Box>
    )
  }

export default ExperienceList;
