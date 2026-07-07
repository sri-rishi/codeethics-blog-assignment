import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation AddPost($title: String!, $content: String!) {
    addPost(title: $title, content: $content) {
      _id
      title
      content
      createdAt
    }
  }
`;