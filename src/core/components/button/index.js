import React from "react";
import { ContainerButton } from "./styles";

export default function Button({height, width, background, radius, border, color, hoverBorder, cursor, title, font, hoverBackground}){
    return(
        <ContainerButton
            height={height}
            width={width}
            background={background} 
            radius={radius} 
            border={border} 
            color={color} 
            hoverBorder={hoverBorder} 
            cursor={cursor} 
            font={font} 
            hoverBackground={hoverBackground}>
            {title}
        </ContainerButton>
    );
}