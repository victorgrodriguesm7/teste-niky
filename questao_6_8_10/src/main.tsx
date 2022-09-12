import React from 'react'
import ReactDOM from 'react-dom/client'
import { CategoryProvider } from './context/CategoryContext';

import App from './App';

import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </React.StrictMode>
)
