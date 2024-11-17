import styled from "styled-components";

export const PaymentTypesContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 2rem;

  .payment-type-button {
    flex: 1;
    background: ${props => props.theme.colors["base-button"]};
    border: 1px solid ${(props) => props.theme.colors["base-button"]};
    border-radius: 6px;
    padding: 1rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.75rem;

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

  .actived {
    background: ${(props) => props.theme.colors["purple-light"]};
    border: 1px solid ${(props) => props.theme.colors.purple};
  }
`