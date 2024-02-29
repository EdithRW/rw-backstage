import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ApplicationLanding } from '../Pages/ApplicationLanding/ApplicationLanding';
import HomePage from '../Pages/HomePage/HomePage';



export const PegaConsoleApp = () => {

  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/applications/:applicationId' element={<ApplicationLanding />} />
      </Routes>
  );
}; 