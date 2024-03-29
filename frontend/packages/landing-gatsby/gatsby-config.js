module.exports = {
  siteMetadata: {
    title: 'La Base de Contact Musique Ultime 🚀',
    description:
      'Trouvez les contacts des maisons de disques, labels, médias, radios, managers, directeurs artistiques, tourneurs, studios, clipeurs, dénicheurs de talents..',
    author: `contactmajor`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1526874674258279'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-244272-46',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false // Breaks styles if not set to false
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `common`,
        path: `../common/src/assets/`
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `../common/src/data/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ContactMajor`,
        short_name: `cm`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [
              `100`,
              `100i`,
              `300`,
              `300i`,
              `400`,
              `400i`,
              `500`,
              `500i`,
              `700`,
              `700i`,
              `900`,
              `900i`
            ]
          },
          {
            family: `Poppins`,
            variants: [`300`, `400`, `500`, `600`, `700`]
          },
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `600`, `700`, `800`]
          },
          {
            family: `Raleway`,
            variants: [`500`, `600`]
          },
          {
            family: `Heebo`,
            variants: [`300`, `400`, `500`, `600`, `700`, `800`]
          },
          {
            family: `B612`,
            variants: [`400`, `400i`, `700`, `700i`]
          },
          {
            family: `DM Sans`,
            variants: [`400`, `400i`, `500`, `500i`, `700`, `700i`]
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
