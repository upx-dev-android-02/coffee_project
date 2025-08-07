"use client"

import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "::selection": {
      bg: "green.300", 
      color: "gray.800",
    },
    "::-moz-selection": {
      bg: "green.300",
      color: "gray.800",
    },
  },
});

const customSystem = createSystem(defaultConfig, config);

export default customSystem;