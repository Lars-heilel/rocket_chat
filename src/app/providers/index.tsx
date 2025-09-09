import { ThemeProvider } from '@/entities/theme-switcher';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { Toaster } from 'sonner';
import { store } from '../store/reduxStore';
import { SessionProvider } from '@/entities/session';
import { routerProvider } from '../router/routes';

export function AppProvider() {
    return (
        <ThemeProvider>
            <Provider store={store}>
                <Toaster position="top-center" richColors />
                <SessionProvider>
                    <RouterProvider router={routerProvider} />
                </SessionProvider>
            </Provider>
        </ThemeProvider>
    );
}
