import React from 'react'
import { AnckorTest, DIVFLEXSecand } from '../../GlobalStyle/Global'
 
function NoteTextForm({ text, name, color ,margin,marginRight,fontWeight,fontSize,link}) {
    return (
        <DIVFLEXSecand margin={margin}>
            <AnckorTest fontSizes ={fontSize}  colors={color} marginRight={marginRight} >
                {text}
            </AnckorTest>
            <AnckorTest  href={link} fontSize={fontSize} fontWeight={fontWeight} color={color}>
                {name}
            </AnckorTest>
        </DIVFLEXSecand>
    )
}

export default NoteTextForm
