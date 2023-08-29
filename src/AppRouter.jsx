import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navigation from "./components/Navigation";
import PokedexZ3 from "./components/Pokedex";
function AppRouter({pokemons}) {
  return (
    <div>
        <Navigation/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/pokedex" element={<PokedexZ3 pokemons={pokemons} />} />
        </Routes>
    </div>
  );
}

export default AppRouter;
