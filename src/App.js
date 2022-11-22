import { BroweRouter, Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <header className="App-header">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        } />
        <Route path="/tes" element={<>tes</>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
