import React from "react";
import { Container, Content, Wrapper } from "./styles";
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";

export default function Main(){
    return(
        <Container>
            <Wrapper>
                <Content>
                    <Content width="8%" height="6vh" background="" justify="space-around">
                        <Content height="3.2vh" width="1.6vw" background="#000" radius="50%" justify="center"><VscChevronLeft /></Content>
                        <Content height="3.2vh" width="1.6vw" background="#000" radius="50%" justify="center"><VscChevronRight /></Content>
                    </Content>
                    <Content width="92%" height="6vh" justify="end">
                        <Content background="#000" radius="5vh" width="13%" height="3vh">
                            <AiOutlineUser />
                            <h4>Marcos Jacometti</h4>
                        </Content>
                    </Content>
                </Content>
            </Wrapper>
        </Container>
    );
}