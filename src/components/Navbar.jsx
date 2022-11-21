import React from 'react';
//import { Link } from 'react-router-dom';
import styled from "styled-components";

import logo from '../logo.svg';
import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    Image,
    useColorMode,
    Link
  } from "@chakra-ui/react";
  import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import ThemeButton from './ThemeButton';


function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
   
    return (
      <>
    
        <Box bg={useColorModeValue("gray.300", "gray.900")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <Link data-testid="header" href="/" >
              <Image src={logo} alt={"logoLastfm"} width={50} height={50} />
              </Link>
            </Box>
  
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
              <ThemeButton />
              </Stack>
            </Flex>
          </Flex>
        </Box>
   
      </>
    );
}
export const Nav = styled.nav`
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.bg};
  z-index: 10;
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.border};
`;
export default Navbar