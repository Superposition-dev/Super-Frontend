import { QueryClient, QueryClientProvider } from 'react-query';

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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Routers />
    </QueryClientProvider>
  );
}

export default App;
