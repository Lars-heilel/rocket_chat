import { ThemeProvider } from '@/entities/theme';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { Toaster } from 'sonner';
import { store } from '../store/reduxStore';
import { routerProvider } from '../router/routes';

export function AppProvider() {
    return (
        <ThemeProvider>
            <Provider store={store}>
                <Toaster position="top-center" richColors />
                <RouterProvider router={routerProvider} />
            </Provider>
        </ThemeProvider>
    );
}
