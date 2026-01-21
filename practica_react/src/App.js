import logo from './logo.svg';
import './App.css';
import { NuevoComponente } from './componentes/NuevoComponente';
import datos from "./data/datos";

function App() {

  const dias_anio = dias_anio.map((v) => {
    return <NuevoComponente title={v.dias_mes} texto=
    {v.dias_semana} />;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NuevoComponente title="titulo prueba" text="texto prueba" numero="67"/>
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
  );
}

export default App;
