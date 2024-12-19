exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      techNews {
        data {
          title
          description
          url
          image_url
          categories
          published_at
        }
      }
      sportsNews {
        data {
          title
          description
          url
          image_url
          categories
          published_at
        }
      }
      healthNews {
        data {
          title
          description
          url
          image_url
          categories
          published_at
        }
      }
    }
  `);

  if (!result || !result.data) {
    console.error("GraphQL query failed");
    return;
  }

  const categories = ["tech", "sports", "health"];
  const newsData = {
    tech: result.data.techNews?.data || [],
    sports: result.data.sportsNews?.data || [],
    health: result.data.healthNews?.data || [],
  };

  categories.forEach((category) => {
    createPage({
      path: `/${category}`,
      component: require.resolve("./src/components/NewsTemplate.js"),
      context: {
        topic: category,
        articles: newsData[category],
      },
    });
  });
};
