import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
console.log('--- VERCEL ENV DEBUG ---');
console.log('VITE_BACKEND_URL:', import.meta.env.VITE_BACKEND_URL);
console.log('VITE_SOCKET_URL:', import.meta.env.VITE_SOCKET_URL);
console.log('Все переменные:', import.meta.env);
console.log('--- END VERCEL ENV DEBUG ---');
