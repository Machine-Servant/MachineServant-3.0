module.exports = {
  siteMetadata: {
    title: `MachineServant`,
    description: `Let us bring your vision to reality.`,
    author: `@MachineServant`,
    siteUrl: 'https://dev.machineservant.com',
    image: '/images/logo.jpg',
    contact: `contact@machineservant.com`,
    keywords: [
      'MachineServant',
      'Machine Servant',
      'Software Development',
      'Website Development',
      'Software Shop',
      'Development Agency',
      'Akron',
      'Cleveland',
      'Ohio',
    ],
    social: {
      linkedIn: 'https://www.linkedin.com/company/machineservant/',
      facebook: 'https://www.facebook.com/MachineServant/',
      instagram: 'https://www.instagram.com/machineservant/',
    },
    navigation: [
      {
        name: 'Services',
        path: '/services',
      },
      {
        name: 'Contact',
        path: '/contact',
      },
      {
        name: 'Blog',
        path: '/blog',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/gatsby-pages`,
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/index.css'],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MachineServant`,
        short_name: `machineservant`,
        start_url: `/`,
        background_color: `#337cc1`,
        theme_color: `#337cc1`,
        display: `minimal-ui`,
        icon: `docs/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop', 'build-javascript'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [
            'Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
