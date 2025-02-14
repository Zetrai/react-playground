import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { CounterProvider } from './contexts/counterContext.jsx';

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CounterProvider>
      <App />
    </CounterProvider>
  </BrowserRouter>
);
