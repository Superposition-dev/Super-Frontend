import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { worker } from './mock/browser';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

if (import.meta.env.MODE === 'development') {
  worker.start({ onUnhandledRequest: 'bypass' });
}

function App() {
  return <QueryClientProvider client={queryClient}></QueryClientProvider>;
}

export default App;
