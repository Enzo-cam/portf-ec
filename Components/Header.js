import React from 'react';
import {Box, Link, Text, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {ImHome} from 'react-icons/im'
import {MdPerson4, MdImportContacts} from 'react-icons/md'

const Header = () => {
  const router = useRouter();

  return (
    <Box display={{ base: "block", sm: "flex" }} mt={4} mb={10} justifyContent="space-between" alignItems="center">
        <Flex justifyContent="space-around" gap={5} alignItems="center" p={4} color="#22333b" fontWeight="bold">
            <Link onClick={() => router.push('/')} textDecor="none" fontSize={20} _hover={{transform: "translateY(2px)"}}>
                <Box display="flex" justifyContent="space-around" alignItems="center" gap={2}>
                    <ImHome fontSize={23} />
                    <Text>Home</Text>
                </Box>
            </Link>
            <Link onClick={() => router.push('/about')} fontSize={20} _hover={{transform: "translateY(2px)"}}>
                <Box display="flex" justifyContent="space-around" alignItems="center" gap={2}>
                    <MdPerson4 fontSize={26} />
                    <Text>Profile</Text>
                </Box>
            </Link>
            <Link onClick={() => router.push('/contact')} fontSize={20} _hover={{transform: "translateY(2px)"}}>
                <Box display="flex" justifyContent="space-around" alignItems="center" gap={2}>
                    <MdImportContacts fontSize={25} />
                    <Text>Contact</Text>
                </Box>
            </Link>
        </Flex>
        <Text>EC</Text>   
    </Box>
  );
};

export default Header;