import { gql } from "@apollo/client";

export const GET_DATA = gql`
  query GetData($page: Int!, $nameFilter: String, $statusFilter: String) {
    characters(
      page: $page
      filter: { name: $nameFilter, status: $statusFilter }
    ) {
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
