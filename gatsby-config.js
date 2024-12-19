/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  pathPrefix: "/MII-gatsby-practica/",
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "GatsbyNews.com"
  },
  
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-github-pages",
      options: {
        pathPrefix: "/MII-gatsby-practica/", 
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.API_TOKEN}&categories=tech&language=en,es&limit=3`,
        rootKey: "techNews",
        schemas: {
          techNews: `
            meta: Meta
            data: [Article]
          `,
          Meta: `
            found: Int
            returned: Int
            limit: Int
            page: Int
          `,
          Article: `
            uuid: String
            title: String
            description: String
            snippet: String
            url: String
            image_url: String
            language: String
            published_at: Date @dateformat
            source: String
            categories: [String]
            relevance_score: Float
          `,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.API_TOKEN}&categories=sports&language=en,es&limit=3`,
        rootKey: "sportsNews",
        schemas: {
          sportsNews: `
            meta: Meta
            data: [Article]
          `,
          Meta: `
            found: Int
            returned: Int
            limit: Int
            page: Int
          `,
          Article: `
            uuid: String
            title: String
            description: String
            snippet: String
            url: String
            image_url: String
            language: String
            published_at: Date @dateformat
            source: String
            categories: [String]
            relevance_score: Float
          `,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.API_TOKEN}&categories=health&language=en,es&limit=3`,
        rootKey: "healthNews",
        schemas: {
          healthNews: `
            meta: Meta
            data: [Article]
          `,
          Meta: `
            found: Int
            returned: Int
            limit: Int
            page: Int
          `,
          Article: `
            uuid: String
            title: String
            description: String
            snippet: String
            url: String
            image_url: String
            language: String
            published_at: Date @dateformat
            source: String
            categories: [String]
            relevance_score: Float
          `,
        },
      },
    },
    {
      resolve: "gatsby-plugin-env-variables",
      options: {
        allowList: ["API_TOKEN"],
      },
    },
  ],
}
