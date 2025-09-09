import {
  createSystem,
  defaultConfig,
  defineConfig,
} from '@chakra-ui/react';

const config = defineConfig({
  globalCss: {
    'html, body': {
      bg: 'bg.page',
      color: 'text.primary',
    },
  },

  theme: {
    tokens: {
      colors: {
        blue: {
          50: { value: '#e6f4ff' },
          100: { value: '#b8daff' },
          200: { value: '#8ac0ff' },
          300: { value: '#5ca6ff' },
          400: { value: '#2e8cff' },
          500: { value: '#0072e6' },
          600: { value: '#0058b4' },
          700: { value: '#003e82' },
          800: { value: '#002451' },
          900: { value: '#000a21' },
        },
        gray: {
          50: { value: '#F8F9FA' },
          100: { value: '#F1F3F5' },
          200: { value: '#E9ECEF' },
        },
        white: { value: '#FFFFFF' },
        black: { value: '#1A202C' },
      },
    },

    semanticTokens: {
      colors: {
        // Cores da marca
        brand: {
          solid: { value: '{colors.blue.500}' }, // Cor principal
          subtle: { value: '{colors.blue.50}' },  // Cor de fundo suave
        },

        // Cores de Background (bg)
        bg: {
          page: { value: '{colors.gray.50}' },      // Fundo da página inteira
          surface: { value: '{colors.white}' },     // Fundo de cards, headers
          muted: { value: '{colors.gray.100}' },    // Fundo sutil
        },

        // Cores de Texto
        text: {
          primary: { value: '{colors.black}' },
          secondary: { value: '{colors.gray.600}' },
        },

        // Cores de Borda
        border: {
          default: { value: '{colors.gray.200}' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);