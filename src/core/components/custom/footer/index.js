import React from "react";
import { Div, WrapperFooter } from "./styles";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function Footer(){
    return(
        <WrapperFooter>
            <Div height="100vh" width="100%" direction="column">
                <Div width="100%" height="10vh" align="center" justify="space-around" color="#fff" weight="bold"><p>Friend activity</p><AiOutlineUserAdd /></Div>
                <Div width="95%" height="auto" align="center" color="#b8b8b8" weight="bold" left="0.5vw"><p>Let friends and followers on Spotify see what you're listening to.</p></Div>
            </Div>
        </WrapperFooter>
    );
}