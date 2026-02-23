import bosque from "../../assets/forest.jpg";
import gato_naranja from "../../assets/orange-cat.jpeg";
import mountain from "../../assets/montain-image.jpeg";
function ComponenteParametro({type}) {

  var imagen;

  switch(type){
    case "forest":
      imagen = bosque;
      break;
    case "orange_cat":
      imagen = gato_naranja;
      break;
    case "mountain":
      imagen = mountain;
      break;
    default:
      imagen = bosque;
  }


  return (
    <div className="text-center my-4">
      <h1>{type.toUpperCase()}</h1>
      <p>Este es mi componente personalizado</p>
      <img
        src={imagen}
        alt={type}
        className="img-fluid rounded"
        style={{ maxWidth: "400px", width: "100%", height: "auto" }}
      />
    </div>
  );
}

export default ComponenteParametro;
