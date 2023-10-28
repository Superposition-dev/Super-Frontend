import { QueryClient, QueryClientProvider } from 'react-query';
import { worker } from './mock/browser';
import Layout from './components/common/Layout';
import './styles/reset.css';
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
    <Layout>
      <div>App</div>
    </Layout>
  </QueryClientProvider>;
}

export default App;
