import styled from "styled-components";

export const CheckoutContainer = styled.main`
  .checkout {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    margin-top: 2.5rem;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: ${props => props.theme.fonts["baloo-2"]["title-xs"]};
      color: ${props => props.theme.colors["base-subtitle"]};
    }

    .checkout-order {
      .checkout-address {
        background: ${props => props.theme.colors["base-card"]};
        border-radius: 6px;
        padding: 2.5rem;
        margin-top: 1rem;
  
        .checkout-address-header {
          display: flex;
          gap: 0.5rem;
  
          svg {
            color: ${props => props.theme.colors["yellow-dark"]};
          }
  
          p {
            font-size: ${props => props.theme.fonts.roboto["text-m"]}px;
            color: ${props => props.theme.colors["base-subtitle"]};
          }
  
          span {
            font-size: ${props => props.theme.fonts.roboto["text-s"]}px;
            color: ${props => props.theme.colors["base-text"]};
          }
        }
  
        .postal-code-input-grid {
          display: grid;
          grid-template: "postal-code" / 200px;
        }
  
        .street {
          grid-area: street;
        }
  
        .number {
          grid-area: number;
        }
  
        .complement {
          grid-area: complement;
        }
  
        .neighborhood {
          grid-area: neighborhood;
        }
  
        .city {
          grid-area: city;
        }
  
        .uf {
          grid-area: uf;
        }
  
        form {
          margin-top: 2rem;
  
          .form-grid-inputs {
            display: grid;
            grid-template-areas: 
              "postal-code . ."
              "street street street"
              "number complement complement"
              "neighborhood city uf"
            ;
            grid-template-columns: 200px 1fr 60px;
            grid-gap: 1rem 0.75rem;
    
            input {
              background: ${props => props.theme.colors["base-input"]};
              border: 1px solid ${props => props.theme.colors["base-button"]};
              border-radius: 4px;
              font-size: ${props => props.theme.fonts.roboto["text-s"]}px;
              color: ${props => props.theme.colors["base-text"]};
              padding: 0.75rem;
    
              &::placeholder {
                color: ${props => props.theme.colors["base-label"]};
              }
            }
          }
        }
      }
  
      .checkout-payment {
        background: ${props => props.theme.colors["base-card"]};
        border-radius: 6px;
        padding: 2.5rem;
        margin-top: 1rem;
  
        .checkout-payment-header {
          display: flex;
          gap: 0.5rem;
  
          svg {
            color: ${props => props.theme.colors.purple};
          }
  
          p {
            font-size: ${props => props.theme.fonts.roboto["text-m"]}px;
            color: ${props => props.theme.colors["base-subtitle"]};
          }
  
          span {
            font-size: ${props => props.theme.fonts.roboto["text-s"]}px;
            color: ${props => props.theme.colors["base-text"]};
          }
        }
      }
    }

    .checkout-items {
      .coffee-card-container {
        background: ${props => props.theme.colors["base-card"]};
        border-radius: 6px 44px;
        padding: 2.5rem;
        margin-top: 1rem;

        .coffee-card-items-resume {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;

          div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
              font-size: ${props => props.theme.fonts.roboto["text-s"]}px;
              color: ${props => props.theme.colors["base-text"]};
            }

            strong {
              font-size: ${props => props.theme.fonts.roboto["text-l"]}px;
              font-weight: bold;
              color: ${props => props.theme.colors["base-subtitle"]};
            }
          }
        }

        .coffee-card-confirm-order-button {
          width: 100%;
          background: ${props => props.theme.colors.yellow};
          color: ${props => props.theme.colors.white};
          text-transform: uppercase;
          font-size: ${props => props.theme.fonts.roboto["text-button-G"]}px;
          font-weight: bold;
          border: 0;
          border-radius: 6px;
          padding: 0.75rem;
          margin-top: 2.25rem;
          cursor: pointer;

          &:hover {
            background: ${props => props.theme.colors["yellow-dark"]};
          }
        }

        hr {
          border: 1px solid ${props => props.theme.colors["base-button"]};
          margin: 1.5rem 0;
        }
      }
    }
  }
`