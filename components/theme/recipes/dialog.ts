// theme/recipes/dialog.ts
import { defineSlotRecipe } from "@chakra-ui/react";

export const dialogSlotRecipe = defineSlotRecipe({
  slots: [
    "backdrop",
    "positioner",
    "content",
    "header",
    "body",
    "footer",
    "title",
    "description",
    "closeTrigger",
  ],

  base: {
    backdrop: {
      // bg: "blackAlpha.600",
    },

    content: {
      borderRadius: "md",
      boxShadow: "none",
      bg: "white",
    },

    header: {
      p: 2,
    },

    body: {
      py: 0,
      px: 2,
    },

    footer: {
      p: 2,
      gap: 1,
    },

    title: {
      fontSize: "lg",
      fontWeight: "medium",
    },

    closeTrigger: {
      top: 4,
      insetEnd: 4,
    },
  },

  variants: {
    size: {
      sm: {
        content: {
          maxW: "sm",
        },
      },

      md: {
        content: {
          maxW: "lg",
        },
      },

      lg: {
        content: {
          maxW: "2xl",
        },
      },
    },

    variant: {
      danger: {
        content: {
          borderTop: "4px solid",
          borderColor: "red.500",
        },

        title: {
          color: "red.500",
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});
