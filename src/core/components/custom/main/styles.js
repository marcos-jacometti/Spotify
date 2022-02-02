import styled from "styled-components";
import img from "../../../img/background.jpg";

export const Container = styled.main`
    height: 100vh;
    width:70vw;
    float: left;
    background: rgb(18, 18, 18);
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 44vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

export const Content = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    align-items: ${props => props.align};
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    background: ${props => props.background};
    border-radius: ${props => props.radius};
    margin-left: ${props => props.left};
    margin-top: ${props => props.top};
    color: #fff;
    font-weight: ${props => props.weight};

    svg {
        fill: ${props => props.fill};
        font-size: ${props => props.svgSize};

        :hover {
            fill: ${props => props.fillHover};
        }
    }

    h1 {
        font-size: 3.5vw;
    }
`;