import React from 'react';
import axios from 'axios';
import Display from './Display';
import Search from './Search';
import { Text, Center  } from '@chakra-ui/react'

function App() {
  const [pokemons, setPokemons] = React.useState([]);
  const [types, setTypes] = React.useState([]);
  const [filterName, setFilterName] = React.useState('');
  const [filterType, setFilterType] = React.useState([]);
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = React.useState(1);

  // Get pokemons
  React.useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json');
      localStorage.setItem('pokemons', JSON.stringify(result.data));
      setPokemons(result.data);
    }

    const cached = localStorage.getItem('pokemons');
    if (cached) {
      console.log("Pokemons found in cache!");
      setPokemons(JSON.parse(cached));
    } else {
      console.log("Needed to query pokemons!");
      fetchData()
    }
  }, [])

  // Get pokemon types
  React.useEffect(() => {
    async function fetchTypes() {
      const result = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json');
      const types = result.data.map(typeData => typeData["english"]);
      localStorage.setItem('types', JSON.stringify(types));
      setTypes(types);
    }

    const cached = localStorage.getItem('types');
    if (cached) {
      console.log("Types found in cache!");
      setTypes(JSON.parse(cached));
    } else {
      console.log("Needed to query types!");
      fetchTypes()
    }
  }, [])

  return (
    <>
      <Search 
        types={types}
        setFilterName={setFilterName}
        setFilterType={setFilterType}
        setCurrentPage={setCurrentPage}
      />
      <Display 
        pokemons={pokemons}
        PAGE_SIZE={PAGE_SIZE}
        filterType={filterType}
        filterName={filterName}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    </>
  );
}

export default App;
