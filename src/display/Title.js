import React from 'react'
import styled from 'styled-components'

function determineAlignment(props){
    
    if(props.alignLeft) return "justify-content: flex-start;"
    
    if(props.alignRight) return "justify-content: flex-end;"
    
    return "justify-content: center";
}

function determineInverted(props){
    if(props.inverted){
        return (`
            -webkit-text-stroke-width: 4px;
            -webkit-text-stroke-color: #872600;
        `)
    }

    return ''
}

const StyledTitle = styled.div`
    display: flex;
    font-size: 70px;
    width: 100%;
    // align-items: center;
    // justify-content: center;
    color: ${props => props.inverted ? "white" : "#872600"};
    ${determineInverted}
    ${determineAlignment}
`;

function Title(props) {
    return (
        <StyledTitle {...props} />
    )
}

export default Title 
