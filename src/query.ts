import { gql } from '@apollo/client';

export const getMedia = gql`
  query {
    Media(type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
    }
  }
`;

export const getCharacters = gql`
  query {
    Page(page: 1) {
      characters {
        name {
          first
          middle
          last
          full
          native
          userPreferred
        }
      }
    }
  }
`;
