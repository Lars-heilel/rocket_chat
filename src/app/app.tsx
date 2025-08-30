import { RouterProvider } from 'react-router';
import { ThemeProvider } from './providers/theme-provider';
import { store } from './store/reduxStore';
import { Provider } from 'react-redux';
import './styles/index.css';
import { routerProvider } from './providers/router-provider';
import { AuthProvider } from './providers/auth-provider';
import { Toaster } from '@/shared/components/ui/sonner';

export function App() {
    return (
        <ThemeProvider>
            <Provider store={store}>
                <AuthProvider>
                    <RouterProvider router={routerProvider} />
                    <Toaster richColors position="top-center" />
                </AuthProvider>
            </Provider>
        </ThemeProvider>
    );
}
