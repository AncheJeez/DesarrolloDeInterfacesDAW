import bosque from "../assets/forest.jpg";
import gato_naranja from "../assets/orange-cat.jpeg";
function MiComponente({type}) {

  var imagen;

  switch(type){
    case "forest":
      imagen = bosque;
      break;
    case "orange_cat":
      imagen = gato_naranja;
      break;
    default:
      imagen = bosque;
  }


  return (
    <div>
      <h1>Mi Componente</h1>
      <p>Este es mi componente personalizado</p>
      <img src={imagen} alt="Imagen" />
    </div>
  );
}

export default MiComponente;
