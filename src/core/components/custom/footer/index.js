import React from "react";
import { Div, WrapperFooter } from "./styles";
import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import Button from "../../button";

export default function Footer(){
    return(
        <WrapperFooter>
            <Div height="100vh" width="100%" direction="column"  align="center">
                <Div width="100%" height="10vh" align="center" justify="space-around" color="#fff"><h4>Friend activity</h4><AiOutlineUserAdd /></Div>
                <Div width="95%" height="6vh" align="center" color="#c8c8c8" left="0.5vw"><p>Let friends and followers on Spotify see what you're listening to.</p></Div>
                <Div width="100%" height="auto" direction="column">
                    <Div width="100%" height="7vh" align="center">
                        <Div background="#404040" height="65%" width="15%" radius="50%" align="center" justify="center" left="0.5vw"><AiOutlineUser /></Div>
                        <Div direction="column" height="100%" width="78%" justify="center" left="0.3vw">
                            <Div background="#404040" height="1.1vh" width="60%" radius="1vh"/>
                            <Div background="#404040" height="1.1vh" width="40%" radius="1vh" top="0.3vh"/>
                            <Div background="#404040" height="1.1vh" width="40%" radius="1vh" top="0.3vh"/>
                        </Div>
                    </Div>
                    <Div width="100%" height="7vh" align="center">
                        <Div background="#404040" height="65%" width="15%" radius="50%" align="center" justify="center" left="0.5vw"><AiOutlineUser /></Div>
                        <Div direction="column" height="100%" width="78%" justify="center" left="0.3vw">
                            <Div background="#404040" height="1.1vh" width="60%" radius="1vh"/>
                            <Div background="#404040" height="1.1vh" width="40%" radius="1vh" top="0.3vh"/>
                            <Div background="#404040" height="1.1vh" width="40%" radius="1vh" top="0.3vh"/>
                        </Div>
                    </Div>
                    <Div width="100%" height="7vh" align="center">
                        <Div background="#404040" height="65%" width="15%" radius="50%" align="center" justify="center" left="0.5vw"><AiOutlineUser /></Div>
                        <Div direction="column" height="100%" width="78%" justify="center" left="0.3vw">
                            <Div background="#404040" height="1.1vh" width="60%" radius="1vh"/>
                            <Div background="#404040" height="1.1vh" width="40%" radius="1vh" top="0.3vh"/>
                            <Div background="#404040" height="1.1vh" width="40%" radius="1vh" top="0.3vh"/>
                        </Div>
                    </Div>
                </Div>
                <Div width="95%" height="9vh" align="center" color="#c8c8c8" left="0.5vw">
                    <p>Go to Settings. Social and enable 'Share my listening activity on Spotify'. You can turn this off at any time.</p>
                </Div>
                <Div width="auto" height="auto">
                    <Button height="4.5vh" width="8.5vw" background="#fff" border="none" radius="5vh" font="1.5vh" cursor="pointer" hoverBackground="#f0f0f0" title="SETTINGS"/>
                </Div>
            </Div>
        </WrapperFooter>
    );
}