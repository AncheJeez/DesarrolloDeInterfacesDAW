import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MostrarEjemplosClase from './components/router/mostrar_ejemplos_clase';
import ComponenteParametro from './components/router/ComponenteParametro';
import ApiComponente from './components/router/ApiComponente';
import ApiComponente2 from './components/router/ApiComponente2';
import PanelDeControl from './components/router/PanelDeControl';
import Header from './components/main_page/Header';
import Footer from './components/main_page/Footer';
import HeaderNav from './components/main_page/HeaderNav';

function App() {
  const text1="Bienvenido a mi página usando React.";
  const text2="Utilice el navegador para mostrar los distintos componentes.";
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
            <Header/>
        </div>
        <HeaderNav />
        <main>
          <Routes>
            
            <Route path="/" element={
              <div>
                {text1}<br/>{text2}<br/>
                <MostrarEjemplosClase/>
              </div>
            } />


            <Route path="panel_gatoarbol" element={<PanelDeControl type="treecat"/>}>
              <Route path="MiBosque" element={<ComponenteParametro type="forest" />} />
              <Route path="MiGatoNaranja" element={<ComponenteParametro type="orange_cat" />} />
              <Route path="MiMountain" element={<ComponenteParametro type="mountain" />} />
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
