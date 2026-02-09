import { useEffect, useState } from "react";

function ApiComponenteMemes() {
    const [memes, setMemes] = useState([]);

    const getMemesAjax = () => {
    fetch("https://api.imgflip.com/get_memes")
        .then((respuesta) => respuesta.json())
        .then(
        (resultado_final) => {
            // la lista viene en data.memes
            setMemes(resultado_final.data.memes);
            console.log(resultado_final.data.memes);
        },
        (error) => {
            console.log(error);
        }
        );
    };

    useEffect(() => {
    getMemesAjax();
    }, []);

    return (
    <div>
        AjaxComponente Memes
        <p>Listado de memes vía Ajax</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {memes.map((meme) => {
            return (
            <div key={meme.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
                <p>{meme.name}</p>
                <img
                src={meme.url}
                alt={meme.name}
                style={{ width: "100%", maxHeight: "200px", objectFit: "contain" }}
                />
            </div>
            );
        })}
        </div>
    </div>
    );
}

export default ApiComponenteMemes;
