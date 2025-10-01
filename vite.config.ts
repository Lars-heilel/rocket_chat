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
            '@components': path.resolve(__dirname, './src/shared/components/ui'),
        },
    },
});
