import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import './assets/scss/index.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tes" element={<>tes</>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
