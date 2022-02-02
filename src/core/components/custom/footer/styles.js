import styled from "styled-components";

export const WrapperFooter = styled.footer`
    height: 100vh;
    width: 15vw;
    background: #080808;
    float: left;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    height: ${props => props.height};
    width: ${props => props.width};
    background: ${props => props.background};
    color: ${props => props.color};
    font-weight: 500;
    margin-left: ${props => props.left};
    margin-top: ${props => props.top};
    border-radius: ${props => props.radius};
    line-height: 2vh;

    svg {
        fill: #c8c8c8;
        font-size: 2.5vh;

        :hover {
            fill: #fff;
        }
    }
`;