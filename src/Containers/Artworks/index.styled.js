import styled from "styled-components";

const StyledArtworks = styled.div`
  .artworks {
    &__title {
      text-align: center;
    }

    &__body {
      display: flex;
      flex-wrap: wrap;
      padding: 1rem 2rem 3rem 2rem;

      @media only screen and (max-width: 425px) {
        padding: 0.5rem;
        padding-bottom: 3rem;
      }

      &__item {
        width: 25%;
        padding: 0.5rem;

        @media only screen and (max-width: 1164px) {
          width: 33.33333333%;
        }

        @media only screen and (max-width: 768px) {
          width: 50%;
        }

        @media only screen and (max-width: 425px) {
          width: 100%;
        }
      }
    }
  }
`;

export default StyledArtworks;
