import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme"
import { GlobalStyles } from "./styles/global"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World!!</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}
