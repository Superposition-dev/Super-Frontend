import { QueryClient, QueryClientProvider } from 'react-query';
import { worker } from './mock/browser';
import './styles/reset.css';
import Routers from './routes/routes';
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
  return <QueryClientProvider client={queryClient}>
      <Routers/>
  </QueryClientProvider>;
}

export default App;
