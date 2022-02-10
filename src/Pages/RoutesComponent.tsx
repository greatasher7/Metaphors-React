import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Account/Account';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account/*" element={<Login />} />
    </Routes>
  );
};

export default RoutesComponent;
