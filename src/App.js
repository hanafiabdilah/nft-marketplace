import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';

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
