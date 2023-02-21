import { gql } from "@apollo/client";

export const GET_ALL_QUOTES = gql`
  query GetAllQuotes {
    getAllQuotes {
      id
      nameUser
      emailUser
      phoneUser
      message
      createdAt
    }
  }
`;
