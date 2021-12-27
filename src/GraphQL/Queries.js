import { gql } from "@apollo/client";

export const LOAD_ARTWORKS = gql`
  query fetchArtworks($skip: Int!, $first: Int!) {
    artworks(skip: $skip, first: $first) {
      id
      name
      description
      mediaUri
      mimeType
      creator {
        id
      }
    }
  }
`;
