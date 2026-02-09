import { useState } from "react";
import "./MouseEvents.css";

function EventMouse() {
  const [mensaje, setMensaje] = useState("Pasa el mouse por aquí");

  return (
    <div className="mouse-container">
      <h2>Eventos de Ratón</h2>

      <div
        className="mouse-box"
        onMouseEnter={() => setMensaje("Entraste con el mouse")}
        onMouseLeave={() => setMensaje("Saliste con el mouse")}
        onClick={() => setMensaje("Hiciste click")}
      >
        Zona de eventos
      </div>

      <p className="mouse-message">{mensaje}</p>
    </div>
  );
}

export default EventMouse;
