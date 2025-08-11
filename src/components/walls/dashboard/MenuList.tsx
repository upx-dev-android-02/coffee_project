// app/components/DynamicMenuList.tsx

"use client";

import React, { ReactElement } from 'react';
import Link from 'next/link'; // Importante: para navegação otimizada no Next.js
import { Menu, Button, MenuItem } from '@chakra-ui/react';

// --- Modelos de Dados ---
export interface SubMenuItemData {
  label: string;
  href: string;
}

export interface MenuItemData {
  label: string;
  href?: string;
  icon?: ReactElement;
  subItems?: SubMenuItemData[];
}

// --- Props do Componente ---
interface DynamicMenuListProps {
  items: MenuItemData[];
}

// --- O Componente ---
export default function DynamicMenuList({ items }: DynamicMenuListProps) {
  return (
    // Usamos um Flex para alinhar os botões lado a lado
    <></>
  );
}