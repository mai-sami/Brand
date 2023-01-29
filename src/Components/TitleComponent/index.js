import React from 'react'
import { TitleText } from '../../GlobalStyle/Global'

function Index({marginBottom,margin, title,fontWeight,width,color,fontSize }) {
    return (
   <TitleText
   color={color}
   width={width} 
   fontWeight={fontWeight}
   fontSize={fontSize}
   margin={margin}
   marginBottom={marginBottom}

   >{title}</TitleText>
    )
}

export default Index
