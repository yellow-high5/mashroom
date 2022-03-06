module.exports = {
  siteMetadata: {
    title: `mashroom`,
    siteUrl: `http://localhost:8000`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`,
      },
      __key: 'assets',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`,
      },
      __key: 'blog',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'works',
        path: `${__dirname}/content/works`,
      },
      __key: 'works',
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'profile',
    //     path: `${__dirname}/content/profile`,
    //   },
    //   __key: 'profile',
    // },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/logo.png',
        name: 'm@shroom',
        short_name: 'm@shroom',
        start_url: '/',
      },
    },
    'gatsby-plugin-root-import',
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -110,
      },
    },
  ],
};
