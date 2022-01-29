import styled from "styled-components";

export const ContainerButton = styled.button`
    height: ${props => props.height};
    width: ${props => props.width};
    background: ${props => props.background};
    border-radius: ${props => props.radius};
    border: ${props => props.border};
    color: ${props => props.color};
    font-size: ${props => props.font};
    font-weight: 700;
    letter-spacing: 0.1vw;

    :hover {
        border: ${props => props.hoverBorder};
        cursor: ${props => props.cursor};
        background: ${props => props.hoverBackground};
    }
`;