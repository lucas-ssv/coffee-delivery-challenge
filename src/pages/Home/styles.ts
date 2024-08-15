import styled from "styled-components";

export const HomeContainer = styled.main`
  width: calc(100% - 304px);
  margin: 0 auto;
  padding: 0 1rem;

  header {
    padding: 2rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      div {
        background: ${props => props.theme.colors["purple-light"]};
        border-radius: 8px;
        padding: 0.5rem;

        display: flex;
        align-items: center;
        gap: 0.25rem;

        svg {
          color: ${props => props.theme.colors["purple"]};
        }

        span {
          color: ${props => props.theme.colors["purple-dark"]};
          font-size: ${props => props.theme.fonts.roboto["text-s"]}px;
        }
      }

      button {
        background: ${props => props.theme.colors["yellow-light"]};
        border: 0;
        border-radius: 8px;
        padding: 0.5rem;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          color: ${props => props.theme.colors["yellow-dark"]};
        }
      }
    }
  }

  > div {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    justify-content: space-between;
    gap: 3.5rem;
    padding: 6.75rem 0;

    div {
      h1 {
        font-family: 'Baloo 2', sans-serif;
        font-size: ${props => props.theme.fonts["baloo-2"]["title-xl"]}px;
        color: ${props => props.theme.colors["base-title"]};
        line-height: 130%;
      }

      p {
        font-size: ${props => props.theme.fonts.roboto["text-l"]}px;
        color: ${props => props.theme.colors["base-subtitle"]};
        margin-top: 1rem;
      }
    }

    > div {
      justify-self: end;

      img {
        flex: 1;
      }
    }
  }

  section {
    margin: 2rem 0;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      color: ${props => props.theme.colors["base-subtitle"]};
      font-size: ${props => props.theme.fonts["baloo-2"]["title-l"]}px;
    }

    ul {
      list-style: none;
      margin-top: 3.375rem;

      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;

      li {
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
      }
    }
  }
`

export const ItemsBanner = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
`

interface ItemProps {
  variant: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    background: ${props => props.theme.colors[props.variant]};
    border-radius: 9999px;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${props => props.theme.colors.white};
    }

    span {
      font-size: ${props => props.theme.fonts.roboto["text-m"]}px;
      color: ${props => props.theme.colors["base-text"]};
    }
  }
`