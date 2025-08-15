import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/app-router";
import { ThemeProvider } from "./provider/theme-provider";
import { ModeToggle } from "@/shared/components/ui/mode-toggle";
import "./styles/index.css";
export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ModeToggle></ModeToggle>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}
