import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouting from './AppRouting';
import { ThemeContextProvidor } from './utils/ThemeContextProvidor';
 

 

ReactDOM.render(
  <React.StrictMode>
   <ThemeContextProvidor> 
      <AppRouting /> 
    </ThemeContextProvidor>
  </React.StrictMode>,
  document.getElementById('root')
);

 
 