import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Layout from './components/Layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Registration from './pages/Registration';
import Tests from './pages/Tests';
import Program from './pages/Program';
import Results from './pages/Results';
import Gallery from './pages/Gallery';
import ParticipantSpace from './pages/ParticipantSpace';
import Admin from './pages/Admin';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/program" element={<Program />} />
            <Route path="/results" element={<Results />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/participant" element={<ParticipantSpace />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
