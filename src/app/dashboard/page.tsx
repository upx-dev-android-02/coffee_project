"use client"; 

import { Button, CloseButton, Drawer, Flex, Icon, IconButton, Portal, Switch, Text } from "@chakra-ui/react"; 
import { useTheme } from "@/context/ThemeContext";
import { useMediaQuery } from "@chakra-ui/react";
import React, { useState } from 'react';
import { FaMoon, FaSun } from "react-icons/fa";
import { MdCoffeeMaker } from "react-icons/md";
import { HiHeart } from "react-icons/hi";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";



export default function DashboardPage() {

  const { theme, toggleTheme } = useTheme();
  const [userName, setUserName] = useState<string>('John Doe');
  

  //USAR AQUI
  //const [isMobile] = useMediaQuery(["(max-width: 768px)"]);


  return (
    <Flex 
      bg={theme.colors.color1} 
      w={"100%"}
      h={"100%"}
      flexDirection="row">

        <Flex
          h="100%"
          display={{base: 'none', md: 'none', lg: 'flex'}}
          flexGrow={[1, 0.8, 0.5]}
          bg={theme.colors.color2}
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between">

          <Flex flexDirection="row" flexGrow={1} alignItems="center" gap="5px">
            <Icon size="2xl" color={theme.colors.onColor1}>
              <BiSolidCoffeeAlt/>
            </Icon>
    
            <Text
                fontFamily="'Inter Variable', sans-serif"
                fontWeight="800"
                fontSize={"30px"}
                color={theme.colors.onColor1}
              > Coffe Project</Text>
          </Flex>

          <Flex
            w="100%"
            flexGrow={10}
            justifyContent="center"> 
              
          </Flex>

          <Flex
            w="100%"
            flexGrow={1}
            pr="20px"
            pb="20px"
            alignItems="end"
            justifyContent="right">

              <Switch.Root onCheckedChange={toggleTheme} colorPalette="red" size="md">
                <Switch.HiddenInput />
                <Switch.Control>
                  <Switch.Thumb />
                  <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
                    <Icon as={FaSun} color="yellow.400" />
                  </Switch.Indicator>
                </Switch.Control>
              </Switch.Root>
          </Flex>
        </Flex>

        <Flex h="100%" w="2px" display={{base: 'none', md: 'none', lg: 'flex'}}  bg={theme.colors.color3}/>

        <Flex
          h="100%"
          flexGrow={[1, 3, 5]}
          bg={theme.colors.color1}
          flexDirection="column">

            <Flex
              h="65px"
              w="100%"
              bg={theme.colors.color1}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center">

              <Flex
                h="100%"
                pl="20px"
                bg={theme.colors.color0}
                justifyContent="center"
                alignItems="center"> 

                <Drawer.Root placement={"start"}>
                  <Drawer.Trigger asChild>
                    <IconButton display={{base: 'flex', md: 'flex', lg: 'none'}} size="sm" bg={theme.colors.color3} color={theme.colors.onColor3} aria-label="Abrir ">
                      <RxHamburgerMenu/>
                    </IconButton>
                  </Drawer.Trigger>
                  <Portal>
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                      <Drawer.Content>
                        
                        <Drawer.Body p="0px">
                          <Flex
                            h="100%"
                            w="100%"
                            bg={theme.colors.color2}
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="space-between"
                            pt="20px"
                            pb="20px">

                            <Flex flexDirection="row" w="100%" alignItems="center" gap="5px" pl="20px">
                              <Icon size="xl" color={theme.colors.onColor1}>
                                <BiSolidCoffeeAlt/>
                              </Icon>

                              <Text
                                  fontFamily="'Inter Variable', sans-serif"
                                  fontWeight="800"
                                  fontSize={"22px"}
                                  color={theme.colors.onColor1}
                                > Coffe Project</Text>
                            </Flex>
                          </Flex> 
                        </Drawer.Body>
                        <Drawer.CloseTrigger asChild>
                          <CloseButton size="sm" bg={theme.colors.color3} color={theme.colors.onColor3}/>
                        </Drawer.CloseTrigger>
                      </Drawer.Content>
                    </Drawer.Positioner>
                  </Portal>
                </Drawer.Root>

                
              </Flex>
            
              <Text
                fontFamily="'Inter Variable', sans-serif"
                fontWeight="500"
                fontSize={"22px"}
                color={theme.colors.onColor1}
              > Olá, {userName}! </Text>

              <Flex
                h="100%"
                bg={theme.colors.color0}
                pr="20px"
                justifyContent="center">
              
                  
              </Flex>
            </Flex>
            <Flex w="100%" h="2px" bg={theme.colors.color3}/>
        </Flex>
    </Flex>
  );
}
