import React from "react";
import { Div, Menu } from "./styles";
import { AiFillHeart } from "react-icons/ai";
import { CgSearch, CgHome } from "react-icons/cg";
import { BiLibrary } from "react-icons/bi";
import { BsThreeDots, BsPlusLg } from "react-icons/bs";

export default function Header(){
    return(
        <Menu>
            <Div height="25vh" width="100%" direction="column" justify="start">
                <Div height="5vh" width="88%" radius="0.5vh"><Div left="1vh" svg="3vh"><BsThreeDots /></Div></Div>
                <Div height="5vh" width="88%" justify="center" radius="0.5vh" svg="2vh"><CgHome /><Div width="85%" height="100%" left="1vw"><p>Home</p></Div></Div>
                <Div height="5vh" width="88%" justify="center" radius="0.5vh" svg="2vh"><CgSearch /><Div width="85%" height="100%" left="1vw"><p>Search</p></Div></Div>
                <Div height="5vh" width="88%" justify="center" radius="0.5vh" svg="2vh"><BiLibrary /><Div width="85%" height="100%" left="1vw"><p>Your Library</p></Div></Div>
            </Div>
            <Div height="auto" width="100%" direction="column" justify="start">
                <Div height="5vh" width="88%" justify="center" radius="0.5vh" svg="2vh"><BsPlusLg /><Div width="85%" height="100%" left="1vw"><p>Create Playlist</p></Div></Div>
                <Div height="5vh" width="88%" justify="center" radius="0.5vh" svg="2vh"><AiFillHeart /><Div width="85%" height="100%" left="1vw"><p>Liked Songs</p></Div></Div>
            </Div>
            <Div left="2vh" height="0.1vh" width="80%" background="#282828"/>
            <Div height="auto" width="100%" direction="column" justify="start">
                <Div height="4vh" width="88%" justify="center" justify="start" radius="0.5vh"><p>Reggae</p></Div>
                <Div height="4vh" width="88%" justify="center" justify="start" radius="0.5vh"><p>Rap</p></Div>
                <Div height="4vh" width="88%" justify="center" justify="start" radius="0.5vh"><p>Funk</p></Div>
            </Div>
        </Menu>
    );
}