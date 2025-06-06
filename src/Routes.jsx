import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from '@commoncomponents/NotFound'
import HomePage from './pages';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;