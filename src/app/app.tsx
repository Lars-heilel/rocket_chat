import { AppProvider } from './providers';
import './styles/index.css';
console.log('ПЕРЕМЕННАЯ ИЗ .env:', import.meta.env.VITE_BACKEND_URL);
export function App() {
    return <AppProvider />;
}
