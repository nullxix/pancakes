import React from 'react';
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    ${props => props.fullscreen ? "height: 100vh": ""};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export default function Section({ fullscreen, children }) {
    
    return (
        <Container
            fullscreen={fullscreen} 
        >
            {children}
        </Container>
    )
}
