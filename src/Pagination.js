import React from 'react'
import "./style.css";
import { Button, ButtonGroup } from '@chakra-ui/react'

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
                && <Button colorScheme='teal' size='sm' variant='solid' onClick={() => {setCurrentPage(currentPage - 1)}}>Prev.</Button>
            }
            {
                Array.from({length: len}, (_,i) => i)
                .map((number) => 
                    <Button 
                        colorScheme='teal' 
                        variant={currentPage === number + 1 ? "solid" : "ghost"}
                        key={number + 1} 
                        onClick={() => setCurrentPage(number + 1)}
                        className="numbtn"
                    >
                        {number + 1}
                    </Button>
                )
                .slice(startIndex, endIndex)
            }
            {
                currentPage !== len 
                && <Button colorScheme='teal' size='sm' variant='solid' onClick={() => {setCurrentPage(currentPage + 1)}}>Next</Button>
            }
        </div>
    )
}

export default Pagination;