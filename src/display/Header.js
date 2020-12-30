import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

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
const StyledLink = styled(Text)`
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
                <Link to='/'style={{ textDecoration: "none" }}>
                    <LogoText>L🥞go</LogoText>
                </Link>
                <LinkContainer>
                    <NavLink to="/" style={{ textDecoration: "none" }}>
                        <StyledLink>How it works</StyledLink>                    
                    </NavLink>
                    <NavLink to="/all-reviews" style={{ textDecoration: "none" }}>
                        <StyledLink>Reviews</StyledLink>                    
                    </NavLink>
                    <NavLink to="/review" style={{ textDecoration: "none" }}>
                        <StyledLink>Make a Review</StyledLink>                    
                    </NavLink>
                </LinkContainer>
            </Container>
        </>
    )
}