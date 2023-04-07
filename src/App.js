import React from 'react';
import axios from 'axios';
import Page from './Page'
import Pagination from './Pagination';

function App() {
  const [pokemons, setPokemons] = React.useState([]);
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = React.useState(1);
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

  return (
    <h1>
      Page {currentPage}
      <Page 
        pokemons={pokemons} 
        PAGE_SIZE={PAGE_SIZE} 
        currentPage={currentPage}
      />
      <Pagination 
        pokemons={pokemons}
        PAGE_SIZE={PAGE_SIZE}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </h1>
  );
}

export default App;
