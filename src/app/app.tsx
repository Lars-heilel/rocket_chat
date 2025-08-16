import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/app-router";
import { ThemeProvider } from "../shared/components/provider/theme-provider";
import { store } from "./store/reduxStore";
import { Provider } from "react-redux";
import "./styles/index.css";
export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
