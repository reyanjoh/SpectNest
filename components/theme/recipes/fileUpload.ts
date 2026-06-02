import { defineSlotRecipe } from "@chakra-ui/react";

export const fileUploadSlotRecipe = defineSlotRecipe({
  slots: [
    "root",
    "dropzone",
    "label",
    "itemGroup",
    "item",
    "itemPreview",
    "itemName",
    "itemSizeText",
    "itemDeleteTrigger",
    "trigger",
    "hiddenInput",
  ],

  base: {
    dropzone: {
      borderWidth: "2px",
      borderStyle: "dashed",
      borderColor: "border",
      borderRadius: "lg",
      p: 8,
      textAlign: "center",
      cursor: "pointer",
      transition: "all 0.2s",
      _hover: {
        borderColor: "blue.500",
      },
    },

    item: {
      display: "flex",
      alignItems: "center",
      gap: 3,
      p: 3,
      borderWidth: "1px",
      borderRadius: "md",
      borderColor: "borderGray.1",
      bg: "transparent",
    },

    itemName: {
      fontWeight: "medium",
      color: "text",
      width: "8rem",
    },

    itemDeleteTrigger: {
      ms: "auto",
    },
  },

  variants: {
    size: {
      sm: {
        dropzone: {
          p: 4,
        },
      },
      md: {
        dropzone: {
          p: 8,
        },
      },
      lg: {
        dropzone: {
          p: 12,
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});
