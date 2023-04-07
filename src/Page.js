import React from 'react'
import "./style.css";

function Page({pokemons, PAGE_SIZE, currentPage}) {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    pokemons = pokemons.slice(startIndex, endIndex);
    
    const x = (id) => id < 10 ? "00" : id < 100 ? "0" : "";
    return (
        <div className='poke'>
            {
                pokemons.map(pokemon => 
                    <div key={pokemon.id}>
                        <h1>{pokemon.name.english}</h1>
                        <img 
                            src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${x(pokemon.id)}${pokemon.id}.png`}
                            alt={pokemon.name.english}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default Page;