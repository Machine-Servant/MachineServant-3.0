module.exports = {
  client: 'machineservant',
  tagName: 'graphql',
  includes: [
    './src/**/*.{ts,tsx}',
    './src/__generated__/gatsby-plugin-documents.graphql',
  ],
  service: {
    name: 'GatsbyJS',
    localSchemaFile: './src/__generated__/gatsby-schema.graphql',
  },
};
