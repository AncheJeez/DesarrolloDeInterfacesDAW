import { useEffect, useState } from "react";
import "./ApiComponente2.css";

export default function ApiComponentePokemon(){
    const [pokemons, setPokemons] = useState([]);
    const typeColors = {normal: "#A8A77A",fire: "#EE8130",water: "#6390F0",electric: "#F7D02C",grass: "#7AC74C",ice: "#96D9D6",fighting: "#C22E28",poison: "#A33EA1",ground: "#E2BF65",flying: "#A98FF3",psychic: "#F95587",bug: "#A6B91A",rock: "#B6A136",ghost: "#735797",dragon: "#6F35FC",dark: "#705746",steel: "#B7B7CE",fairy: "#D685AD",};
    useEffect(() => {
        const getPokemonsAjax = async () => {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
                const data = await res.json();

                const detailedPokemons = await Promise.all(
                data.results.map(async (pokemon) => {
                    const res = await fetch(pokemon.url);
                    return res.json();
                })
                );

                setPokemons(detailedPokemons);
            } catch (error) {
                console.log(error);
            }
            };

            getPokemonsAjax();
    }, []);

    return (
    <div>
        AjaxComponente Pokemon
        <p>Listado de pokemon vía Ajax</p>

        <div className="main-container" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px"
        }}>
            {pokemons.map((pokemon, index) => (
                <div key={pokemon.name} className="pokemon-card" style={{
                    border: "1px solid "+typeColors[pokemon.types[0].type.name],
                    borderRadius: "10px",
                    padding: "5px",
                    backgroundImage: `url(${pokemon.sprites.other["official-artwork"].front_default})`,
                    backgroundColor: ""+typeColors[pokemon.types[0].type.name],
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "250px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    textShadow: "1px 1px 3px black"
                }}>
                    <p className="pokemon-name" style={{color: typeColors[pokemon.types[0].type.name]}}>
                        {pokemon.name.toUpperCase()}
                    </p>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                        alt={pokemon.name}
                        className="pokemon-img"
                    />
                </div>
            ))}
        </div>
    </div>
    );
}