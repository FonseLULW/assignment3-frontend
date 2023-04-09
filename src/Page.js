import React from 'react'
import "./style.css";
import PokeInfo from './PokeInfo';

function Page({pokemons, PAGE_SIZE, currentPage, filterType, filterName, onPokemonClick}) {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    pokemons = pokemons.slice(startIndex, endIndex);
    
    return (
        <div className='poke'>
            {
                pokemons.map(pokemon =>
                    <div key={pokemon.id} onClick={() => {onPokemonClick(pokemon)}}>
                        <PokeInfo pokemon={pokemon}></PokeInfo>
                    </div>
                )
            }
        </div>
    )
}

export default Page;