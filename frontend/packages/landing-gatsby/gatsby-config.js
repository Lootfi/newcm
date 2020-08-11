module.exports = {
  siteMetadata: {
    title: 'La Base de Contact Musique Ultime 🚀',
    description:
      'Trouvez les contacts des maisons de disques, labels, médias, radios, managers, directeurs artistiques, tourneurs, studios, clipeurs, dénicheurs de talents..',
    author: `contactmajor`
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-create-client-paths`,
    //   options: { prefixes: [`*`] }
    // },
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: `${__dirname}/src/pages`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: 'pixel-id-here'
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
        // icons: [
        //   {
        //     rel: 'icon',
        //     sizes: '',
        //     src: '../src/images/contactmajor/favicon.ico'
        //   },
        //   {
        //     rel: 'apple-touch-icon',
        //     type: '',
        //     sizes: '57x57',
        //     src: '../src/images/contactmajor/apple-icon-57x57.png'
        //   },
        //   {
        //     rel: 'apple-touch-icon',
        //     type: '',
        //     sizes: '60x60',
        //     src: '../src/images/contactmajor/apple-icon-60x60.png'
        //   },
        //   {
        //     rel: 'apple-touch-icon',
        //     type: '',
        //     sizes: '72x72',
        //     src: '../src/images/contactmajor/apple-icon-72x72.png'
        //   },
        //   {
        //     rel: 'apple-touch-icon',
        //     type: '',
        //     sizes: '76x76',
        //     src: '../src/images/contactmajor/apple-icon-76x76.png'
        //   },
        //   {
        //     rel: 'apple-touch-icon',
        //     type: '',
        //     sizes: '114x114',
        //     src: '../src/images/contactmajor/apple-icon-114x114.png'
        //   },
        //   {
        //     rel: 'apple-touch-icon',
        //     type: '',
        //     sizes: '120x120',
        //     src: '../src/images/contactmajor/apple-icon-120x120.png'
        //   },
        //   {
        //     rel: 'apple-touch-icon',
        //     type: '',
        //     sizes: '144x144',
        //     src: '../src/images/contactmajor/apple-icon-144x144.png'
        //   },
        //   {
        //     rel: 'apple-touch-icon',
        //     type: '',
        //     sizes: '152x152',
        //     src: '../src/images/contactmajor/apple-icon-152x152.png'
        //   },
        //   {
        //     rel: 'apple-touch-icon',
        //     type: '',
        //     sizes: '180x180',
        //     src: '../src/images/contactmajor/apple-icon-180x180.png'
        //   },
        //   {
        //     rel: 'icon',
        //     type: 'image/png',
        //     sizes: '192x192',
        //     src: '../src/images/contactmajor/android-icon-192x192.png'
        //   },
        //   {
        //     rel: 'icon',
        //     type: 'image/png',
        //     sizes: '32x32',
        //     src: '../src/images/contactmajor/favicon-32x32.png'
        //   },
        //   {
        //     rel: 'icon',
        //     type: 'image/png',
        //     sizes: '96x96',
        //     src: '../src/images/contactmajor/favicon-96x96.png'
        //   },
        //   {
        //     rel: 'icon',
        //     type: 'image/png',
        //     sizes: '16x16',
        //     src: '../src/images/contactmajor/favicon-16x16.png'
        //   }
        // ]
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
