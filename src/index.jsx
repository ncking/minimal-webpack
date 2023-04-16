import { createRoot } from 'react-dom/client';
import App from './app';
import './index.scss';

const el = document.getElementById('app');
createRoot(el).render(<App />);