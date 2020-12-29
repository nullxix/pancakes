import React from 'react'
import styled from 'styled-components'

const P = styled.p`
    font-size: 22px;
    padding: 20px 80px;
`
function Paragraph(props) {
    return (
        <P {...props}/>
    )
}

Paragraph.inverted = styled.p`
    color: white;
    font-size: 22px;
    padding: 20px 80px;
`

export default Paragraph