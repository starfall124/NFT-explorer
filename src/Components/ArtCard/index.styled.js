import styled from "styled-components";

const StyledArtCard = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 0.5rem;
  transition: 0.5s;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  .artcard {
    &__media {
      width: 100%;
      height: 300px;

      & > * {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }

      &:hover {
        cursor: pointer;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      padding-top: 1rem;

      &__name {
        font-weight: bold;
        font-size: 1rem;
        margin-bottom: 0.3rem;
      }

      &__description {
        font-size: 0.8rem;
        color: gray;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin-bottom: 1rem;
      }

      &__creator {
        margin-top: auto;
        word-break: break-all;
      }
    }
  }
`;

export default StyledArtCard;
