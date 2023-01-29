import React from 'react'
import { FLEX } from '../../GlobalStyle/Global'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import right from '../../Assets/Icon/right.png'

function Breadcrumb() {
    return (
        <FLEX padding={"1rem"}>
            <Pargraph color={"#8B96A5"} width={"auto"}>  Home </Pargraph>
            <Image marginLeft={".5"} marginRights={".5"} src={right} alt="right" />
            <Pargraph color={"#8B96A5"} width={"auto"}>  Clothings </Pargraph>
            <Image
                marginLeft={".5"}
                marginRights={".5"} src={right} alt="right" />

            <Pargraph color={"#8B96A5"} width={"auto"}>  Men’s wear </Pargraph>
            <Image
                marginLeft={".5"}
                marginRights={".5"} src={right} alt="right" />

            <Pargraph color={"#8B96A5"} width={"auto"}>  Summer clothing </Pargraph>

        </FLEX>
    )
}

export default Breadcrumb
