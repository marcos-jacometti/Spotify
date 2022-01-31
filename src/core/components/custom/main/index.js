import React from "react";
import { Container, Content, Wrapper } from "./styles";
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";
import { MdVerified } from "react-icons/md";

export default function Main(){
    return(
        <Container>
            <Wrapper>
                <Content>
                    <Content width="8%" height="6vh" background="" justify="space-around" align="center">
                        <Content height="3.2vh" width="1.6vw" background="#000" radius="50%" justify="center" align="center"><VscChevronLeft /></Content>
                        <Content height="3.2vh" width="1.6vw" background="#000" radius="50%" justify="center" align="center"><VscChevronRight /></Content>
                    </Content>
                    <Content width="92%" height="6vh" justify="end" align="center">
                        <Content background="#000" radius="5vh" width="13%" height="3vh" align="center">
                            <Content background="#404040" radius="50%" height="95%" width="1.5vw" left="0.1vw" justify="center"><AiOutlineUser /></Content>
                            <Content left="0.2vw"><p>Marcos Jacometti</p></Content>
                        </Content>
                    </Content>
                </Content>
                <Content width="100%" height="38vh" justify="end" direction="column">
                    <Content direction="column" height="18vh">
                        <Content left="2.5vw" align="center" fill="#1e90ff"><MdVerified /> Verified Artist</Content>
                        <Content left="2.5vw"><h1>Bob Marley & The Wailers</h1></Content>
                        <Content left="2.5vw" top="1.8vh"><p>12,439,843 monthly listeners</p></Content>
                    </Content>
                </Content>
            </Wrapper>
        </Container>
    );
}