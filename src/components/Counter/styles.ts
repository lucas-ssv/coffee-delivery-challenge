import styled from "styled-components";

export const CounterContainer = styled.main`
  background: ${props => props.theme.colors["base-button"]};
  border-radius: 8px;
  width: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    color: ${props => props.theme.colors.purple};
    border: 0;
    border-radius: 8px;
    padding: 0.5rem;
    cursor: pointer;
  }

  span {
    flex: 1;
    font-size: ${props => props.theme.fonts.roboto["text-m"]}px;
    text-align: center;
  }
`