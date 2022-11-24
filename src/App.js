import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages';
import './assets/scss/index.scss'
import { Navbar, Footer } from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tes" element={<>tes</>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
