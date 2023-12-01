import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { GlobalStyle } from './global.styles';


import HomePage from './pages/Home/home.page';




function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
