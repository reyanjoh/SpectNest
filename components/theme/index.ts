import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { recipes } from "./recipes";

const config = defineConfig({
  theme: {
    tokens: {
      colors: colors,
      spacing: spacing,
    },
    recipes,
  },
});

export const system = createSystem(defaultConfig, config);
