import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout from './layouts/PageLayout';
import Dashboard from './pages/Dashboard';
import Booking from './pages/Booking';
import Error from './pages/Error';
import './styles/app.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
