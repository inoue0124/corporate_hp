import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
  ],
  jsxRuntime: `automatic`,
};

export default config;
