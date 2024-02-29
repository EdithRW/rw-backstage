import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApplicationLanding } from '../Pages/ApplicationLanding/ApplicationLanding';
import HomePage from '../HomePage/HomePage';
import { Header, HeaderLabel } from '@backstage/core-components';



export const PegaConsoleApp = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/pega-console/home" element={<HomePage />} />
        <Route path="/pega-console/applications/:applicationId" element={<ApplicationLanding />} />
        <Route path="/pega-console" element={<HomePage />} />
      </Routes>
    </Router>
  );
}; 