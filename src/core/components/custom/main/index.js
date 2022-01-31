import React from "react";
import { Container, Content, Wrapper } from "./styles";
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { BsFillPlayCircleFill, BsThreeDots } from "react-icons/bs";
import Button from "../../button";
import Song from "../../songs";

export default function Main(){
    return(
        <Container>
            <Wrapper>
                <Content svgSize="2.5vh">
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
                <Content width="100%" height="38vh" justify="end" direction="column" svgSize="2.5vh">
                    <Content direction="column" height="18vh">
                        <Content left="2.5vw" align="center" fill="#1e90ff"><MdVerified /> Verified Artist</Content>
                        <Content left="2.5vw"><h1>Bob Marley & The Wailers</h1></Content>
                        <Content left="2.5vw" top="1.8vh"><p>12,439,843 monthly listeners</p></Content>
                    </Content>
                </Content>
            </Wrapper>
            <Content width="100%" height="56vh" direction="column">
                <Content align="center" justify="space-around" width="15vw" height="10vh">
                    <Content background="#fff" radius="50%" fill="#03c03c" svgSize="7vh" left="2.5vw"><BsFillPlayCircleFill /></Content>
                    <Content><Button title="FOLLOW" color="#fff" background="transparent" height="3vh" width="5vw" border="thin solid #b8b8b8" radius="0.5vh"/></Content>
                    <Content fill="#b8b8b8" svgSize="3vh"><BsThreeDots /></Content>
                </Content>
                <Content left="2.5vw" width="5vw" height="3vh" align="center"><h2>Popular</h2></Content>
                <Content width="100%" height="43vh" direction="column">
                    <Song number="1" song="Three Little Birds" status="606,240,733" time="3:00"/>
                    <Song number="2" song="Could You Be Loved" status="506,177,295" time="3:57"/>
                    <Song number="3" song="Is This Love" status="467,055,894" time="3:52"/>
                    <Song number="4" song="Jamming" status="326,196,871" time="3:31"/>
                    <Song number="5" song="One Love" status="318,546,723" time="2:52"/>
                </Content>
            </Content>
        </Container>
    );
}