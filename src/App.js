import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavTabProvider } from './context/portfolio.context';
import { ThemeProvider } from './context/theme.context';
import { GlobalStyle } from './global.styles';

import Navbar from './components/Navbar/navbar.component';
import IntroAnimation from './components/IntroAnimation/intro.component';
import Background from './components/Background/background.component';

import HomePage from './pages/Home/home.page';
import AboutPage from './pages/About/about.page';
import ProjectsPage from './pages/Projects/projects.page';
import ContactPage from './pages/Contact/contact.page';

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 5000); // Corresponding to the duration of the intro animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <NavTabProvider>
        <Router>
          <GlobalStyle />
          {introComplete && <Background />}
          {/* {introComplete && <Navbar />} */}
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
    </ThemeProvider>
  );
}

export default App;
