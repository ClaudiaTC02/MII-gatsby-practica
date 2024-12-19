/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "GatsbyNews.com"
  },
  
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://api.thenewsapi.com/v1/news/all?api_token=aUi5LZIcbjPnXAE0k7MUUsTkGokoEsmrO08zbQFz&categories=tech&language=en,es&limit=3",
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
        url: "https://api.thenewsapi.com/v1/news/all?api_token=aUi5LZIcbjPnXAE0k7MUUsTkGokoEsmrO08zbQFz&categories=sports&language=en,es&limit=3",
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
        url: "https://api.thenewsapi.com/v1/news/all?api_token=aUi5LZIcbjPnXAE0k7MUUsTkGokoEsmrO08zbQFz&categories=health&language=en,es&limit=3",
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
  ],
}
