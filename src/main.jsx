import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ApolloProvider } from '@apollo/client';

import { CounterProvider } from './contexts/counterContext.jsx';
import client from './pages/GraphQLExample/apolloClient.js';
import store from './store/store';
import App from './App.jsx';

import './index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <CounterProvider>
            <App />
          </CounterProvider>
        </Provider>
      </ApolloProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
