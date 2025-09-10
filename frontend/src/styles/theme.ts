import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body": {
      bg: "bg.page",
      color: "text.primary",
      transition: "background-color 0.2s ease-out, color 0.2s ease-out",
    },
  },

  theme: {
    tokens: {
      colors: {
        blue: {
          50: { value: "#e6f4ff" },
          100: { value: "#b8daff" },
          200: { value: "#8ac0ff" },
          300: { value: "#5ca6ff" },
          400: { value: "#2e8cff" },
          500: { value: "#0072e6" },
          600: { value: "#0058b4" },
          700: { value: "#003e82" },
          800: { value: "#002451" },
          900: { value: "#000a21" },
        },
        gray: {
          50: { value: "#F8F9FA" },
          100: { value: "#F1F3F5" },
          200: { value: "#E9ECEF" },
          700: { value: "#343A40" },
          800: { value: "#212529" },
          900: { value: "#1A1B1E" },
        },

        white: { value: "#FFFFFF" },
        black: { value: "#1A202C" },
      },
    },

    semanticTokens: {
      colors: {
        // Cores da marca
        brand: {
          solid: { value: "{colors.blue.500}" }, // Cor principal
          subtle: {
            value: {
              base: "{colors.blue.50}",
              _dark: "{colors.blue.900}",
            },
          },
        },

        bg: {
          page: {
            value: { base: "{colors.gray.50}", _dark: "{colors.gray.900}" },
          },
          surface: {
            value: { base: "{colors.white}", _dark: "{colors.gray.800}" },
          },
          muted: {
            value: { base: "{colors.gray.100}", _dark: "{colors.gray.700}" },
          },
        },
        text: {
          primary: {
            value: { base: "{colors.black}", _dark: "{colors.gray.50}" },
          },
          secondary: {
            value: { base: "{colors.gray.600}", _dark: "{colors.gray.400}" },
          },
        },
        border: {
          default: {
            value: { base: "{colors.gray.200}", _dark: "{colors.gray.700}" },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
