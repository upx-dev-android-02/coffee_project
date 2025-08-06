"use client";

import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';
import { useTheme } from '@/context/ThemeContext';


interface InfoTextProps extends TextProps {
  children: React.ReactNode;
}


const TextN: React.FC<InfoTextProps> = ({ children, ...rest }) => {

  const { theme } = useTheme();

  return (
    <Text
      fontSize="12px"
        fontFamily="'Inter Variable', sans-serif"
        fontWeight="300"
      color={theme.colors.color1}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default TextN;
