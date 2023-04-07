import React from 'react'
import "./style.css";

function Pagination({pokemons, PAGE_SIZE, currentPage, setCurrentPage}) {
    const len = Math.ceil(pokemons.length / PAGE_SIZE)

    let startIndex, endIndex;
    if (currentPage > len - PAGE_SIZE) {
        startIndex = len - PAGE_SIZE;
        endIndex = len;
    } else {
        startIndex = currentPage - 1;
        endIndex = currentPage + PAGE_SIZE - 1;
    }
    
    return (
        <div>
            {
                currentPage !== 1 
                && <button onClick={() => {setCurrentPage(currentPage - 1)}}>Prev.</button>
            }
            {
                Array.from({length: len}, (_,i) => i)
                .map((number) => 
                    <button 
                        key={number + 1} 
                        onClick={() => setCurrentPage(number + 1)}
                        className={currentPage === number + 1 ? "btnActive" : ""}
                    >
                        {number + 1}
                    </button>
                )
                .slice(startIndex, endIndex)
            }
            {
                currentPage !== len 
                && <button onClick={() => {setCurrentPage(currentPage + 1)}}>Next</button>
            }
        </div>
    )
}

export default Pagination;