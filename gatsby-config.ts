import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `キャリッジ株式会社`,
    author: {
      name: `キャリッジ株式会社`,
      summary: `キャリッジ株式会社のコーポレートサイトです。`,
    },
    siteUrl: `https://www.carri-age.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    `gatsby-plugin-typegen`,
  ],
  jsxRuntime: `automatic`,
};

export default config;
