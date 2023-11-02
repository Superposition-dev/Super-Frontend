import { Routes, Route } from 'react-router-dom';
import Layout from '../components/common/Layout';
import MainPage from '../pages/main';
import Detail from '../components/Detail';
import ProductsPage from '../pages/products';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default Routers;
