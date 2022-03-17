import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './routes/routes';
import { ThemeProvider } from './utils/ThemeProvider';

import './normalize.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
