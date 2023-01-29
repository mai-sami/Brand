import React, { useState } from 'react'
import { DIVFLexRight } from '../../GlobalStyle/Global'
import ItemsCard from './ItemsCard'
import TotalHeader from './TotalHeader'

function BodyItemFilter() {
    const [show,setShow]=useState(true)
    const handeelShow=()=>{
        console.log(show)
        setShow(show===false)
    }
    const handeelShowBlok=()=>{
        console.log(show)
        setShow(show===true)
     }
    return (
        <DIVFLexRight width={"100%"}>
            <TotalHeader handeelShow={handeelShow} handeelShowBlok={handeelShowBlok} />
            <ItemsCard handeelShow={handeelShow}show={show} setShow={setShow}/>
        </DIVFLexRight>
    )
}

export default BodyItemFilter
