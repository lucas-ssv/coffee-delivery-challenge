import styled from "styled-components";

export const SuccessContainer = styled.main`
  .title {
    font-family: 'Baloo 2', sans-serif;
    font-size: ${props => props.theme.fonts["baloo-2"]["title-l"]}px;
    color: ${props => props.theme.colors["yellow-dark"]};
    margin-top: 5rem;
  }

  .subtitle {
    font-size: ${props => props.theme.fonts.roboto["text-l"]}px;
    color: ${props => props.theme.colors["base-subtitle"]};
    margin-top: 0.25rem;
  }

  .order-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.375rem;
    margin-top: 2.5rem;

    .order-info-container {
      background: linear-gradient(#FAFAFA, #FAFAFA) padding-box, linear-gradient(to right, #DBAC2C 0%, #8047F8 100%) border-box;
      border-radius: 6px 36px 6px 36px;
      border: 1px solid transparent;
      padding: 2.5rem;

      display: grid;
      gap: 2rem;

      .order-info {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        .order-icon {
          background: ${props => props.theme.colors.purple};
          border-radius: 9999px;
          padding: 0.5rem;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        p, strong {
          font-size: ${props => props.theme.fonts.roboto["text-m"]}px;
          color: ${props => props.theme.colors["base-text"]};
        }
      }
    }
  }
`

interface IconProps {
  variant: 'purple' | 'yellow' | 'yellow-dark'
}

export const Icon = styled.main<IconProps>`
  background: ${props => props.theme.colors[props.variant]};
  border-radius: 9999px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`