import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import History from './pages/History';
import Fellowship from './pages/Fellowship';
import theme from './theme';

// Placeholder components for other pages
const Values = () => <div>Values Page - Coming Soon</div>;
const Beliefs = () => <div>Beliefs Page - Coming Soon</div>;
const Founder = () => <div>Founder Page - Coming Soon</div>;
const Donations = () => <div>Donations Page - Coming Soon</div>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/values" element={<Values />} />
            <Route path="/history" element={<History />} />
            <Route path="/beliefs" element={<Beliefs />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/fellowship" element={<Fellowship />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
