import React, { Component } from 'react';
import PinkBooks from "../assets/graphics/PinkBooks.png"
import IT from "../assets/graphics/IT.png"

export const getGFX = (name) => {

    switch (name) {
        case "PinkBooks":
            return (PinkBooks); 
        break;
    

        default:
            return(IT);
        break;
    }

}

