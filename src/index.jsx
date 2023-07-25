
import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App.jsx'
import './index.jsx'
import './styles.css'
import { StyleProvider } from '@ant-design/cssinjs';






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <StyleProvider>
        <App />
      </StyleProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);


