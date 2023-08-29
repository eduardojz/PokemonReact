import React, {useState } from "react";
import "../styles/Pokedex.css";
//icons
import { selectIcon,typeIcon } from "../assets/imports/imports";
import Filter from "./Filter";
function Pokedex({ pokemons }) {
  const [filter,setFilter]=useState([]);
  const [newPokemons,setNewPokemons]=useState(pokemons);
  function onChange(e) {
    let type = e.target.value;
    let updatedFilter = [];
  
    if (!filter.includes(type)) {
      updatedFilter = [...filter, type];
    } else {
      updatedFilter = filter.filter((i) => i !== type);
    }
    setFilter(updatedFilter);
  
    const filterPokemons = pokemons.filter((pokemon) =>
      updatedFilter.includes(pokemon.type)
    );
    setNewPokemons(filterPokemons.length <= 0 ? pokemons : filterPokemons);
  }
  return (
    <div className="background">
      <Filter pokemons={pokemons} onChange={onChange} types={Object.keys(typeIcon)} />
      <div className="card-container">
        {newPokemons.map((items, index) => (
          <article className="card" key={index}>
            <div className="card-image">
              <img src={items.img}/>
            </div>
            <div className="card-text">
              <span className="date date-1">Ability : {items.ability}</span>
              <h2>
                <img  style={{ backgroundColor: selectIcon(items.type)[1] }} src={selectIcon(items.type)[0]} className="icons"></img>
                {items.name}
              </h2>
            </div>
            <div className="card-stats card-1">
              <div className="stat">
                <div className="value">Type</div>
                <div className="type">{items.type}</div>
              </div>
              <div className="stat">
                <div className="value">{items.hp[1]}</div>
                <div className="type">{items.hp[0]}</div>
              </div>
              <div className="stat">
                <div className="value">{items.attack[1]}</div>
                <div className="type">{items.attack[0]}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
export default Pokedex;
