import React from 'react'
import styled from 'styled-components'

const StepWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 58px;
    width: 100%;
    justify-content: ${props => props.right ? 'flex-end' : 'flex-start'};
    padding: 0px 12vw;
`

const StyledNumber = styled.div`
    font-size: 72px;
    border-radius: 1.5em;
    background-color: #872600;
    width: 1.5em;
    height: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;

    margin: 1em;
`

const Number = ({number}) => {
    return (
        <StyledNumber>
            {number}
        </StyledNumber>
    )
}

export default function Step({number, right, children}) {
    return (
        <StepWrapper right={right}>
            {
                right ? 
                <>
                    {children}
                    <Number number={number}/>
                </>
                :
                <>
                    <Number number={number}/>
                    {children}
                </>
            }
        </StepWrapper>
    )
}