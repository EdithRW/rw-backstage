import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { NewPegaPage } from './NewPegaPage';
import { PegaProjectListPage } from './PegaProjectListPage';
import { PegaProjectDetailsPage } from './PegaProjectDetailsPage';
import { newPegaRouteRef, pegaProjectDetailsRouteRef, pegaProjectsRouteRef } from '../routes';

export const RWPegaConsolePage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  return (
    <Routes>
      <Route path='/' element={<PegaProjectListPage />} />
      <Route path='/new' element={<NewPegaPage />} />
      <Route path='/project' element={<PegaProjectDetailsPage />}
      />
    </Routes>
  );
};