import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';

const Account = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Account;
