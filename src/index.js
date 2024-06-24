import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import {UserProvider} from './components/contexts/user.context';
import { ProductsProvider } from './components/contexts/products.context';
import App from './App';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
   <ProductsProvider>
    <App />
    </ProductsProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
