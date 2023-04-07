import React, { useEffect } from 'react'
import "./style.css";
import { Select, Input } from '@chakra-ui/react'

function Page({types}) {
    return (
        <div id="search">
            <Input placeholder='Basic usage' htmlSize={4} width='auto'/>
            <Select placeholder='Select option' htmlSize={4} width='auto'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
        </div>
    )
}

export default Page;