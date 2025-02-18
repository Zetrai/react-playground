import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CounterProvider } from './contexts/counterContext.jsx';

import './index.css';
import App from './App.jsx';
import store from './store/store';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CounterProvider>
          <App />
        </CounterProvider>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
);
