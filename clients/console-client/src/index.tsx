import React from 'react';
import ReactDOM from 'react-dom/client';
import Context from './Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context/>
  </React.StrictMode>
);

