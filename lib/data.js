import { gql, GraphQLClient } from "graphql-request";

const endpoint =
  "https://api-ap-northeast-1.graphcms.com/v2/ckp51j842b2fk01xp0rik4v4k/master";

export const getPostsAndPortfolios = async () => {
  const graphcms = new GraphQLClient(endpoint);

  const query = gql`
    {
      portfolios {
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
      }
      posts {
        title
        slug
        description
        date
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `;

  return await graphcms.request(query);
};

export const getPortfolioItems = async () => {
  const graphcms = new GraphQLClient(endpoint);

  const query = gql`
    {
      portfolios {
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
      }
    }
  `;

  return await graphcms.request(query);
};

export const getAllPosts = async () => {
  const graphcms = new GraphQLClient(endpoint);

  const query = gql`
    {
      posts {
        title
        slug
        description
        date
        tags
        author {
          name
          image {
            url
            width
            height
          }
        }
      }
    }
  `;

  return await graphcms.request(query);
};

export const getPortfolioItem = async (slug) => {
  const graphcms = new GraphQLClient(endpoint);

  const query = gql`
    query getPortfolio($slug: String!) {
      portfolios(where: { slug: $slug }) {
        title
        tags
        slug
        description
        date
        coverImage {
          url
          width
          height
        }
        content
      }
    }
  `;

  const variables = {
    slug,
  };

  return await graphcms.request(query, variables);
};

export const getPortfolioSlugs = async () => {
  const graphcms = new GraphQLClient(endpoint);

  const query = gql`
    {
      portfolios {
        slug
      }
    }
  `;

  return await graphcms.request(query);
};

export const getPostSlugs = async () => {
  const graphcms = new GraphQLClient(endpoint);

  const query = gql`
    {
      posts {
        slug
      }
    }
  `;

  return await graphcms.request(query);
};
export const getPost = async (slug) => {
  const graphcms = new GraphQLClient(endpoint);

  const query = gql`
    query getPost($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        tags
        slug
        description
        date
        author {
          name
          image {
            url
            width
            height
          }
        }
        content
      }
    }
  `;

  const variables = {
    slug,
  };

  return await graphcms.request(query, variables);
};
