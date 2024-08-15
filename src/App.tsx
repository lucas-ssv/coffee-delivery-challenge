import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme"
import { GlobalStyles } from "./styles/global"
import { Home } from "./pages/Home"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  )
}
