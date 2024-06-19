import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import {UserProvider} from './components/contexts/user.context';
import App from './App';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <App />
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
