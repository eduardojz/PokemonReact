import React, { useEffect, useState } from 'react';
import AppRouter from './AppRouter';
import Header from './components/Header';
import { getPokemon } from './functions/Apis';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        getPokemon().then((data)=>{
          setPokemons(data);
          setIsLoading(false); // Cambia isLoading a false cuando los datos se han cargado
        });
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setIsLoading(false); // En caso de error, también cambia isLoading a false
      }
    };

    fetchData();
  }, []); // El segundo argumento vacío [] asegura que esto solo se ejecute una vez al montar el componente

  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <Header pokemons={pokemons}></Header>
          <AppRouter pokemons={pokemons}></AppRouter>
        </>
      )}
    </div>
  );
}

export default App;
