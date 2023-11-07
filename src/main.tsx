import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './util/scrollTop.tsx';
// import { worker } from './mock/browser';

// if (import.meta.env.MODE === 'development') {
//   worker.start({ onUnhandledRequest: 'bypass' });
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
