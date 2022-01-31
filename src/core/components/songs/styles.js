import styled from "styled-components";
import img from "../../img/song.jpg";

export const Infos = styled.div`
    display: flex;
    align-items: center;
    
    width: 100%;
    height: 8vh;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify};
    color: ${props => props.color};
    width: ${props => props.width};
`;

export const Theme = styled.div`
    height: 4vh;
    width: 2.2vw;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-left: 1vw;
    margin-right: 1vw;
`;