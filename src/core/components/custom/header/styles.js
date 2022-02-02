import styled from "styled-components";

export const Menu = styled.header`
    height: 100vh;
    width: 15vw;
    background: #000;
    float: left;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    align-items: center;
    justify-content: ${props => props.justify};
    height: ${props => props.height};
    width: ${props => props.width};
    background: ${props => props.background};
    border-radius: ${props => props.radius};
    margin-left: ${props => props.left};
    color: #c8c8c8;
    font-weight: 900;
    

    svg {
        font-size: ${props => props.svg};
    }

    :hover {
        cursor: pointer;
        color: #fff;
    }
`;