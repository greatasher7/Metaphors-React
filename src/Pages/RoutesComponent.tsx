import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Account/Account';
import Work from './Work/Work';
import Inventory from './Inventory/Inventory';
import Market from './Market/Market';
import Charge from './Charge/Charge';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account/*" element={<Login />} />
      <Route path="/work/*" element={<Work />} />
      <Route path="/inventory/*" element={<Inventory />} />
      <Route path="/market/*" element={<Market />} />
      <Route path="/charge/*" element={<Charge />} />
    </Routes>
  );
};

export default RoutesComponent;
