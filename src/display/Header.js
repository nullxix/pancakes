import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 72px;

    position: fixed;
    top: 0px;

    background-color: #F1BA67;
    box-shadow: 0px 0px 10px 10px #00000026;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 40px;
`;

const Text = styled.p`
    font-size: 28px;
    color: #ffffff;
    padding: 0px 5px;

    opacity: 1;

    text-decoration: none;
`;

const LogoText = styled.p`
    font-size: 38px;
    color: #ffffff;
    padding: 0px 5px;

    opacity: 1;

    flex: 2;

    text-decoration: none;
`;
const Link = styled(Text)`
    transition: 0.2s;

    &:hover {
        opacity: 0.5;
    }
`;

const LinkContainer = styled.div`   
    flex: 1;

    display: flex;
    justify-content: space-between;
`;

export default function Header(props){
    return(
        <>
            <Container>
                <LogoText>L🥞go</LogoText>
                <LinkContainer>
                    <NavLink to="/" style={{ textDecoration: "none" }}>
                        <Link>How it works</Link>                    
                    </NavLink>
                    <NavLink to="/review" style={{ textDecoration: "none" }}>
                        <Link>Reviews</Link>                    
                    </NavLink>
                    <NavLink to="/all-reviews" style={{ textDecoration: "none" }}>
                        <Link>Make a Review</Link>                    
                    </NavLink>
                </LinkContainer>
            </Container>
        </>
    )
}