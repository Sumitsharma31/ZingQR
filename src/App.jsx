import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import QRGeneratorPage from './pages/QRGeneratorPage';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <PageLoader />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<QRGeneratorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
