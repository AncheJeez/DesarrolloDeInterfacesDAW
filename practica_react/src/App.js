import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Micomponente from './components/MiComponente';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/mibosque">MiBosque</Link> |{" "}
            <Link to="/migatonaranja">MiGatoNaranja</Link> |{" "}
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<div>Esto es una prueba de home page</div>} />
          <Route path="/mibosque" element={<Micomponente type="forest" />} />
          <Route path="/migatonaranja" element={<Micomponente type="orange_cat" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
