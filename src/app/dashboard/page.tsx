"use client"; 

import { Button, CloseButton, Drawer, Flex, Icon, IconButton, Input, Popover, Portal, Switch, Text } from "@chakra-ui/react"; 
import { useTheme } from "@/context/ThemeContext";
import { useMediaQuery } from "@chakra-ui/react";
import React, { useState } from 'react';
import { FaMoon, FaSun } from "react-icons/fa";
import { MdCoffeeMaker } from "react-icons/md";
import { HiHeart } from "react-icons/hi";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import TextP from "@/components/primaries/texts/TextP";
import TextN from "@/components/primaries/texts/TextN";
import IconButtonType1 from "@/components/primaries/buttons/IconButtonType1";



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
            pl="20px"
            pb="20px"
            alignItems="end"
            justifyContent="left">

              <Switch.Root onCheckedChange={toggleTheme} colorPalette="green" size="md">
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
                justifyContent="center"
                alignItems="center"
                pr="20px">
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <IconButtonType1 aria-label="Naruto Form">
                        <Text fontSize="sm" color={theme.colors.color0}></Text>
                      </IconButtonType1>
                    </Popover.Trigger>
                    <Portal >
                      <Popover.Positioner>

                        <Popover.Content borderRadius="16px" css={{ "--popover-bg": theme.colors.color4 }}>
                          <Popover.Arrow />
                          <Popover.Body>

                            <Popover.Title 
                              fontFamily="'Inter Variable', sans-serif" 
                              color={theme.colors.onColor4}
                              fontSize="20px"
                              textAlign="center"
                              fontWeight="600">
                              Fazer Login
                            </Popover.Title>
                            

                            <TextP color={theme.colors.onColor4} mt={6}>Nome de usuário:</TextP>
                            <Input
                              mt={2}
                              size="sm"
                              fontSize="16px"
                              w="100%"
                              borderRadius="6px"
                              color={theme.colors.onColor4}
                              bg={theme.colors.color4}
                              borderColor={theme.colors.color1}
                              placeholder="Digite seu nome de usuário"
                              _placeholder={{
                                color: theme.colors.onColor4,  
                                opacity: 1                      
                              }}
                              focusVisibleRing="outside"                
                              focusRingColor={theme.colors.color6}              
                              focusRingWidth="0px"                      
                              focusRingStyle="none"                  
                            />

                          

                            <TextP color={theme.colors.onColor4} mt={6} fontSize="16px">Senha:</TextP>
                            <Input
                              mt={2}
                              size="sm"
                              fontSize="16px"
                              w="100%"
                              borderRadius="6px"
                              color={theme.colors.onColor4}
                              bg={theme.colors.color4}
                              borderColor={theme.colors.color1}
                              placeholder="Digite sua senha"
                              _placeholder={{
                                color: theme.colors.onColor4,  
                                opacity: 1                      
                              }}
                              focusVisibleRing="outside"                
                              focusRingColor={theme.colors.color6}              
                              focusRingWidth="0px"                      
                              focusRingStyle="none" />

                              
                            
                          </Popover.Body>
                        </Popover.Content>
                      </Popover.Positioner>
                    </Portal>
                  </Popover.Root>
                  
              </Flex>
            </Flex>
            <Flex w="100%" h="2px" bg={theme.colors.color3}/>
        </Flex>
    </Flex>
  );
}
