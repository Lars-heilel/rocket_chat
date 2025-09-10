import { defineConfig } from 'steiger';
import fsd from '@feature-sliced/steiger-plugin';

export default defineConfig([
    ...fsd.configs.recommended,
    {
        ignores: ['**/shared/chadcn-ui/**', '**/lib/utils.ts', '**/hooks/use-mobile.ts', '**/app/store/**', '**/app/router/config/**'],
    },
    {
        files: ['./src/entities/**'],
        rules: {
            'fsd/forbidden-imports': 'off',
        },
    },
    {
        files: ['./src/pages/**', './src/widgets/**'],
        rules: {
            'fsd/no-segmentless-slices': 'off',
        },
    },
]);
