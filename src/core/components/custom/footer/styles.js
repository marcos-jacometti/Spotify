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
    font-weight: ${props => props.weight};
    margin-left: ${props => props.left};
    margin-top: ${props => props.top};
    border-radius: ${props => props.radius};

    svg {
        fill: #b8b8b8;
        font-size: 2.5vh;

        :hover {
            fill: #fff;
        }
    }
`;