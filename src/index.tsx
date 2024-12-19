import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './Components/Homepage';
import { Catalog } from './Components/Catalog';
import { ProductPage } from './Components/ProductPage';
import { RequireAuth } from './Components/RequireAuth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />

          <Route path="catalog" element={<Catalog />} />

          <Route path="product/:id" element={<ProductPage />} />

          <Route path="/cart/:id" element={<RequireAuth />}>
            <Route index element={<Catalog />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
