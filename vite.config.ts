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
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        if (id.includes('zod')) {
                            return 'zod';
                        }
                        return 'vendor';
                    }
                    return null;
                },
            },
        },
    },
});
