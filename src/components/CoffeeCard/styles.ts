import styled from "styled-components";

export const CoffeeCardContainer = styled.main`
  display: flex;
  gap: 1.25rem;

  img {
    width: 64px;
    height: 64px;
  }

  .coffee-card-details {
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
      font-size: ${props => props.theme.fonts.roboto["text-m"]}px;
      color: ${props => props.theme.colors["base-subtitle"]};
    }

    .coffee-card-actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        background: ${props => props.theme.colors["base-button"]};
        border: 0;
        border-radius: 6px;
        padding: 0.5rem;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        &:hover {
          background: ${props => props.theme.colors["base-hover"]};
        }

        svg {
          color: ${props => props.theme.colors.purple};
        }

        span {
          font-size: ${props => props.theme.fonts.roboto["text-s"]}px;
          color: ${props => props.theme.colors["base-text"]};
          text-transform: uppercase;
        }
      }
    }
  }

  strong {
    font-size: ${props => props.theme.fonts.roboto["text-m"]}px;
    font-weight: bold;
    color: ${props => props.theme.colors["base-text"]};
  }
`