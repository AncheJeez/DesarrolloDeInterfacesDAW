import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Micomponente from './components/MiComponente';
import ApiComponente from './components/ApiComponente';
import EventMouse from './components/EventMouse';
import ApiComponente2 from './components/ApiComponente2';
import PanelDeControl from './components/PanelDeControl';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const text1="Bienvenido a mi página usando React.";
  const text2="Utilice el navegador para mostrar los distintos componentes.";
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
            <Header/>
        </div>
        <header className="Nav">
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/panel_gatoarbol">ParamComponente</Link> |{" "}
            <Link to="/panel_api">APIs</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<div>{text1}<br/>{text2}<br/><EventMouse/></div>} />


            <Route path="panel_gatoarbol" element={<PanelDeControl type="treecat"/>}>
              <Route path="MiBosque" element={<Micomponente type="forest" />} />
              <Route path="MiGatoNaranja" element={<Micomponente type="orange_cat" />} />
              <Route path="MiMountain" element={<Micomponente type="mountain" />} />
            </Route>


            <Route path="/panel_api" element={<PanelDeControl type="API"/>}>
              <Route path="api" element={<ApiComponente/>} />
              <Route path="api2" element={<ApiComponente2/>} />
            </Route>


          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
