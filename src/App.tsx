import React, { useState } from 'react'



import HomePage from './components/pages/HomePage';

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { Routes, Route } from "react-router-dom";
import CashPage from "./components/pages/CashPage/index";
import NewCashPage from './components/pages/newcashkick/index';

import { ReviewPage } from './components/pages/ReviewCashKick';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cash-acceleration" element={<CashPage />} />
        <Route path="/watch" element={<h1>watch how to page</h1>} />
        <Route path="/newcashkick" element={<NewCashPage />} />
        <Route path="/reviewcashkick" element={<ReviewPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
