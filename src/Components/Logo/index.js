import React from 'react'
import { FLEX } from '../../GlobalStyle/Global'
import { Image } from '../../GlobalStyle/Home/SubscribeStyle'
import logo from '../../Assets/Group.png'
import Brand from '../../Assets/Group 5.png'

function Index() {
    return (
        <>
            <FLEX>
                <Image marginRights={".5"} src={logo} alt="logo" />
                <Image src={Brand} alt="Brand" />
            </FLEX>
        </>
    )
}

export default Index
