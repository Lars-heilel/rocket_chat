import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/app-router";
import { ThemeProvider } from "./provider/theme-provider";
import "./styles/index.css";
export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}
