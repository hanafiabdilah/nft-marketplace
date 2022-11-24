import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages';
import './assets/scss/index.scss'
import { Footer } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tes" element={<>tes</>} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
