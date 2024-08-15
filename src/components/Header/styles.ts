import styled from "styled-components";

export const HeaderContainer = styled.header`
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
`