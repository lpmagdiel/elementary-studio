import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bulma/css/bulma.min.css';
import './Styles/main.css';
import FiraCode from './assets/fonts/FiraCode-vF.ttf';
import SpartanBold from './assets/fonts/Spartan-ExtraBold.ttf';
import Spartan from './assets/fonts/Spartan-Regular.ttf';
import { Home } from './Pages';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode> <Home /> </React.StrictMode>
)