import styled from "styled-components";

export const HomeContainer = styled.main`
  .intro {
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