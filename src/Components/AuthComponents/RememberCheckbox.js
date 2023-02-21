import React from 'react'
import { DIVFLEXRight } from '../../GlobalStyle/Global'
export function RememberCheckbox({ children,width,margin,checked }) {
    return (
        <DIVFLEXRight margin={margin}>
            <input checked={checked} width={width} type={"checkbox"} />
            {children}
        </DIVFLEXRight>
    )
}

 export function RaidioButton({ children }) {
    return (
        <DIVFLEXRight>
            <input  type={"radio"} />
            {children}
        </DIVFLEXRight>
    )
}

   
