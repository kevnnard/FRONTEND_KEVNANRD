import { gql } from "@apollo/client";

export const AUTHUSERLOGIN = gql`
  mutation userLogin($input: UserGetInput!) {
    userLogin(input: $input) {
      token
    }
  }
`;
