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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Raleway',
            variants: [
              '100',
              '200',
              '300',
              '400',
              '500',
              '600',
              '700',
              '800',
              '900',
              '100i',
              '200i',
              '300i',
              '400i',
              '500i',
              '600i',
              '700i',
              '800i',
              '900i',
            ],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
