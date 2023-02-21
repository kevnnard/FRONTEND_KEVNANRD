import { gql } from "@apollo/client";

export const GET_ALL_WORKS = gql`
  query GetAllWorks {
    getAllWorks {
      id
      name
      year
      minDescription
      images {
        nameImage
      }
      status
    }
  }
`;

export const GET_ONE_WORK = gql`
  query GetOneWork($getOneWorkId: ID!) {
    getOneWork(id: $getOneWorkId) {
      id
      name
      role
      year
      minDescription
      descriptionWork
      link
      platform
      stack
      front
      back
      images {
        nameImage
      }
      status
    }
  }
`;

export const UPDATE_ONE_WORK = gql`
  mutation UpdateWork($updateWorkId: ID!, $input: WorkInput) {
    updateWork(id: $updateWorkId, input: $input) {
      id
    }
  }
`;

export const DELETE_ONE_WORK = gql`
  mutation Mutation($deleteWorkId: ID!) {
    deleteWork(id: $deleteWorkId)
  }
`;
