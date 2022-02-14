import React from 'react';
import { Route, Routes } from 'react-router';
import Detail from './Detail';
import Viewer from './Viewer';

const Work = () => {
  return (
    <Routes>
      <Route path="/" element={<Detail />} />
      <Route path="/viewer" element={<Viewer />} />
    </Routes>
  );
};

export default Work;
