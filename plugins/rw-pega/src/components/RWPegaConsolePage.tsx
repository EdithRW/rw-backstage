import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NewPegaPage } from './NewPegaPage';
import { PegaProjectListPage } from './PegaProjectListPage';
import { PegaProjectDetailsPage } from './PegaProjectDetailsPage';



export const RWPegaConsolePage = () => {
  
  return (
    <Routes>
      <Route path='/' element={<PegaProjectListPage />} />
      <Route path='/new' element={<NewPegaPage />} />
      <Route path='/project' element={<PegaProjectDetailsPage />}
      />
    </Routes>
  );
}; 