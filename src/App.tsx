import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme.context';

import { GlobalStyles } from './global.styles';
import HomePage from './pages/Home/home.page';
import ContactPage from './pages/Contact/contact.page';
import ProjectsPage from './pages/Projects/projects.page';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
