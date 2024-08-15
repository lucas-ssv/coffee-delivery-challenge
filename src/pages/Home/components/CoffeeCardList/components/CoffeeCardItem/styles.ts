import styled from "styled-components";

export const CoffeeCardItemContainer = styled.li`
  background: ${props => props.theme.colors["base-card"]};
  border-radius: 6px 36px;

  .card-image {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      position: relative;
      bottom: 1rem;
    }
  }

  .card-tag {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: ${props => props.theme.fonts.roboto["text-tag"]}px;
      color: ${props => props.theme.colors["yellow-dark"]};
      text-transform: uppercase;
      font-weight: bold;
      background: ${props => props.theme.colors["yellow-light"]};
      border-radius: 9999px;
      padding: 0.25rem 0.5rem;
    }
  }

  .card-content {
    padding: 1rem;

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: ${props => props.theme.fonts["baloo-2"]["title-s"]}px;
      color: ${props => props.theme.colors["base-subtitle"]};
      display: block;
      text-align: center;
    }

    p {
      font-size: ${props => props.theme.fonts.roboto["text-s"]}px;
      color: ${props => props.theme.colors["base-label"]};
      text-align: center;
      line-height: 130%;
      margin-top: 0.5rem;
    }

    .card-buy {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.25rem;
      margin-top: 2.063rem;

      .card-product-value {
        font-size: ${props => props.theme.fonts.roboto["text-s"]}px;

        display: flex;
        align-items: baseline;
        gap: 0.25rem;

        span {
          font-family: 'Baloo 2', sans-serif;
          font-size: ${props => props.theme.fonts["baloo-2"]["title-m"]}px;
          font-weight: bold;
          color: ${props => props.theme.colors["base-text"]};
        }
      }

      .card-actions {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        .card-counter {
          background: ${props => props.theme.colors["base-button"]};
          border-radius: 8px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;

          button {
            background: transparent;
            color: ${props => props.theme.colors.purple};
            border: 0;
            padding: 0.75rem 0.5rem;
            cursor: pointer;
          }

          span {
            font-size: ${props => props.theme.fonts.roboto["text-m"]};
          }
        }

        button {
          background: ${props => props.theme.colors["purple-dark"]};
          color: ${props => props.theme.colors.white};
          border-radius: 8px;
          border: 0;
          padding: 0.5rem;
          cursor: pointer;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`