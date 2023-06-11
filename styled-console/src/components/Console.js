import React, { useState } from 'react';
import styled from 'styled-components'
import Flex from './Flex';
import Line from './Line';

const StyledConsole = styled.textarea`
width:100%;
height: 70vh;
background:black;
font-size:24px;
border:none;
resize:none;
&:focus {
    outline:none; 
}
color: ${({color}) => color || 'green'}

`

const Console = ({color, clicked, ...props}) => {
    const [lines, setLines] = useState(['C://User/Documents/Job/Izum>'])
    const onKeyPress = e => {
        if(e.charCode == 13) {
            setLines([...lines, 'C://User/Documents/Job/Izum>'])
        }
    }
    return (
        <Flex>
            <Flex direction='column' margin='0 5px 0 0'>
                {lines.map(line => 
                    <Line color={color}>{line}</Line>
                    )}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
        </Flex>
    )
};

export default Console;