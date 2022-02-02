import React from "react";
import { Info, Infos, Theme } from "./styles";

export default function Song({number, song, status, time}){
    return(
        <Infos>
            <Info color="#c8c8c8" width="6%" justify="end"><h4>{number}</h4></Info>
            <Info width="54%">
                <Theme />
                <p>{song}</p>
            </Info>
            <Info color="#c8c8c8" width="20%" justify="center"><p>{status}</p></Info>
            <Info color="#c8c8c8" width="20%" justify="center"><p>{time}</p></Info>
        </Infos>
    );
}