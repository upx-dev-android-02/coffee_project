"use client";

import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";
import { useTheme } from '@/context/ThemeContext';
import { IoPerson } from "react-icons/io5";



export default function IconButtonType1({ ...rest }) {
    const { theme } = useTheme();

    return (
        <Flex
            as="button"
            bg={theme.colors.color0} 
            color={theme.colors.onColor3}
            borderRadius="50%"
            width="36px"
            height="36px"
            border="1px solid" 
            borderColor="transparent" 
            outline="none"
            justify="center"
            align="center"
            cursor="pointer" // Adicionado para indicar que é um elemento clicável
            transition="background-color 0.2s, color 0.2s, border-color 0.2s" // Transição suave
            _hover={{
                bg: theme.colors.color2,
                color: theme.colors.onColor2, // Este color afeta o texto, não o ícone
                borderColor: theme.colors.color3,
            }}
            _focus={{
                boxShadow: "outline", // Adiciona um anel de foco para acessibilidade
            }}
            {...rest}
        >
            <IoPerson size="22px" color={theme.colors.onColor3} />
        </Flex>
    );
};