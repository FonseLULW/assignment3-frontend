import React from "react";
import axios from 'axios';
import Display from './Display';
import Search from './Search';

function Home({SERVER_URL, refreshAccessToken}) {
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

    const onPokemonClick = async (pokemon) => {
        const refreshed = await refreshAccessToken();
        if (!refreshed) {
            alert("Cannot refresh access token. Try again later!");
        } else {
            const res = await axios.get(`${SERVER_URL}/api/v2/pokemon?name=${pokemon.name.english}`, {
                headers: {'auth-token-access': localStorage.getItem("access-token")}
            })
            console.log(res.data);
            if (res.status !== 200 || res.data.pokeErrCode) {
                console.log("Couldn't update pokemon click");
            }
        }
    }

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
                onPokemonClick={onPokemonClick}
            />
        </>
    )
}

export default Home;