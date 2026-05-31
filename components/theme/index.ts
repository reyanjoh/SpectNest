import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { recipes } from "./recipes";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "'Inter', system-ui, sans-serif" },
        heading: { value: "'Inter', system-ui, sans-serif" },
      },
      colors: colors,
      spacing: spacing,
    },
    recipes,
  },
});

export const system = createSystem(defaultConfig, config);
