import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/shared/components/ui'),
        },
    },
    define: {
        VITE_BACKEND_URL: process.env.VERCEL_BACKEND_URL,
        VITE_SOCKET_URL: process.env.VERCEL_SOCKET_URL,
    },
});
