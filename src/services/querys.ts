import { gql } from "@apollo/client";

export const GET_DATA = gql`
  query GetData($page: Int!, $nameFilter: String) {
    characters(page: $page, filter: { name: $nameFilter }) {
      info {
        count
      }
      results {
        status
        name
        id
        image
        species
        type
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`;

export const GET_FOOTER = gql`
  query GetData($page: Int!, $nameFilter: String) {
    characters {
      info {
        count
      }
    }

    locations {
      info {
        count
      }
    }

    episodes {
      info {
        count
      }
    }
  }
`;
