import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { Header } from './components/Header/Header';
import { PageCalculator } from './pages/PageCalculator';
import { Footer } from './components/Footer/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Header />
      <>
        <PageCalculator />
      </>
    <Footer />
  </>
);
reportWebVitals();