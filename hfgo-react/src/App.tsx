import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import History from './pages/History';
import Fellowship from './pages/Fellowship';
import Values from './pages/Values';
import Beliefs from './pages/Beliefs';
import Founder from './pages/Founder';
import Donations from './pages/Donations';
import Blog from './pages/Blog';
import theme from './theme';

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
