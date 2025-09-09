import { defineConfig } from 'steiger';
import fsd from '@feature-sliced/steiger-plugin';

export default defineConfig([
    ...fsd.configs.recommended,
    {
        ignores: ['**/shared/components/**', '**/lib/utils.ts', '**/hooks/use-mobile.ts', '**/reauthBaseQueryWrapper.ts'],
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
