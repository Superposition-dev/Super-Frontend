import { QueryClient, QueryClientProvider } from 'react-query';
import { worker } from './mock/browser';
import './styles/reset.css';
import Routers from './routes/routes';
import GlobalStyles from './styles/globalStyles';
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
      <GlobalStyles/>
      <Routers/>
  </QueryClientProvider>;
}

export default App;
