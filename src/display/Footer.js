import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    width: 100%;
    background: pink;
    padding: 20px;
    padding-left: 50px;
`

export default function Footer() {

    return (
        <StyledFooter>
            No other app stacks up to ours
        </StyledFooter>
    )
}
