/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Frontend Masters Gatsby Workshop',
    description:
      'A site we built together during a full-day Frontend Masters Gatsby workshop!',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        plugins: [{ resolve: 'gatsby-remark-images' }],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      }
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'gatsbyjs'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `sliders`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `banners`,
        path: `banners`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'postmd',
        path: 'postmd'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'congreso2015',
        path: 'congreso-2015'
      }
    },
  ]
}
