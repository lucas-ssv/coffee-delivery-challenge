import styled from "styled-components";

export const DefaultLayoutContainer = styled.main`
  width: calc(100% - 304px);
  margin: 0 auto;
  padding: 0 1rem;
  color: ${props => props.theme.colors["base-title"]};
`