import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './Components/Homepage';
import { Catalog } from './Components/Catalog';
import { ProductsProvider } from './Components/ProductsContext';
import { ProductPage } from './Components/ProductPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  </React.StrictMode>,
);
