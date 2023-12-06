import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavTabProvider } from './context/portfolio.context';
import { GlobalStyle } from './global.styles';

import Navbar from './components/Navbar/navbar.component';

import HomePage from './pages/Home/home.page';
import AboutPage from './pages/About/about.page';
import ProjectsPage from './pages/Projects/projects.page';
import ContactPage from './pages/Contact/contact.page';

import IntroAnimation from './components/IntroAnimation/intro.component';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 4000); // Corresponding to the duration of the intro animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavTabProvider>
      <Router>
        <GlobalStyle />
        {introComplete && <Navbar />}
        {introComplete ? (
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        ) : (
          <IntroAnimation />
        )}
      </Router>
    </NavTabProvider>
  );
}

export default App;
