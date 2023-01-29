import React from 'react'
import { DIVFLEXRight } from '../../GlobalStyle/Global'
export function RememberCheckbox({ children,width,margin }) {
    return (
        <DIVFLEXRight margin={margin}>
            <input width={width} type={"checkbox"} />
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

   
