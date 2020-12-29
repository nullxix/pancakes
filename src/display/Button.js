import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
    border-radius: 100px;
    background-color: ${props => props.inverted ? 'white' : '#872600'};
    color: ${props => props.inverted ? 'black' : '#F1BA67'};
    padding: 10px 35px;
    font-size: 28px;
    text-align: center;
    box-shadow: 0px 0px 10px 10px #00000026;
    cursor: pointer;
    outline: none;
`
const StrongButton = styled.button`
    border-radius: 100px;
    background-color: ${props => props.inverted ? 'white' : '#872600'};
    color: ${props => props.inverted ? 'black' : 'white'};
    border: none;
    padding: 10px 35px;
    font-size: 28px;
    text-align: center;
    box-shadow: 0px 10px 10px 0px #00000026;
    cursor: pointer;
    outline: none;

    position: relative;

    transition: 0.1s;

    &:hover {
        box-shadow: 0px 10px 12px 0px #00000026;
        background-color: ${props => props.inverted ? '#ffffffb3' : '#872600'};
    }
    &:active {
        box-shadow: 0px 5px 10px 0px #00000026;
        background-color: ${props => props.inverted ? '#ffffffb3' : '#872600'};
        transition: 0s;
    }
`

Button.StrongLink = props => {
    const {to, ...restProps} = props
    return (
        <Link to={to}>
            <StrongButton {...restProps}/>
        </Link>
    )
}

Button.Strong = StrongButton

Button.Link = props => {
    const {to, ...restProps} = props
    return (
        <Link to={to}>
            <Button {...restProps}/>
        </Link>
    )
}

export default Button