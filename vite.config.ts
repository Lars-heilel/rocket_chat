import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        visualizer({
            open: true,
            filename: 'bundle-analysis.html',
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@shadcn-ui': path.resolve(__dirname, './src/shared/shadcn-ui'),
            '@ui': path.resolve(__dirname, './src/shared/ui'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom', 'react-router', '@vercel/react-router'],
                    redux: ['@reduxjs/toolkit', '@reduxjs/toolkit/query/react'],
                    zod: ['zod'],
                    socketio: ['socket.io-client'],
                    radix: ['@radix-ui/react-slot'],
                    lucide: ['lucide-react'],
                },
            },
        },
    },
    preview: { port: 5173 },
});
