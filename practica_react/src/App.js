import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Micomponente from './components/MiComponente';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/micomponente">Micomponente</Link> |{" "}
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/micomponente" element={<Micomponente />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
