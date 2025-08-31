import { RouterProvider } from 'react-router';
import { ThemeProvider } from './providers/theme-provider';
import { store } from './store/reduxStore';
import { Provider } from 'react-redux';
import './styles/index.css';
import { routerProvider } from './providers/router-provider';
import { SessionProvider } from './providers/SessionProvider';

export function App() {
    return (
        <ThemeProvider>
            <Provider store={store}>
                <SessionProvider>
                    <RouterProvider router={routerProvider} />
                </SessionProvider>
            </Provider>
        </ThemeProvider>
    );
}
