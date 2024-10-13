import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme"
import { GlobalStyles } from "./styles/global"
import { AppRoutes } from "./routes/app.routes"
import { BrowserRouter } from "react-router-dom"
import { ProductProvider } from "./contexts/ProductContext"

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <ProductProvider>
          <AppRoutes />
        </ProductProvider>
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  )
}
