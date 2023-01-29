import React from 'react'
import { DIVFLEX, FLEX } from '../../GlobalStyle/Global'
import Dropdown from '../../GlobalStyle/Home/Dropdown'
import logo from '../../Assets/assetRegion/AE@2x.png'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { Container, Content } from '../../GlobalStyle/LayoutStyle'
import list from '../../Assets/Icon/list.png'

function SubHeader() {
    return (
        <Content
            padding={".6rem"}
            background={"#FFFFFF"} >
            <Container>
                <DIVFLEX>
                    <FLEX>
                        <Image
                            marginRights={".4"}
                            src={list} />
                        <Pargraph width={"120px"}>  All category </Pargraph>
                        <Pargraph width={"120px"}>  Hot offers </Pargraph>
                        <Pargraph width={"120px"}>  Gift boxes </Pargraph>
                        <Pargraph width={"120px"}>  Projects  </Pargraph>
                        <Pargraph width={"120px"}>  Menu item </Pargraph>
                        <Dropdown
                            background={"transparent"}
                            border={"none"}
                            text={"Help"}
                            borderRight={"none"} />
                    </FLEX>
                    <FLEX>
                        <Dropdown background={"transparent"} border={"none"} text={"English, USD"} />
                        <DIVFLEX>
                            <Image
                                marginRights={"0"}
                                src={logo} />
                            <Dropdown background={"transparent"} border={"none"} text={"Ship to"} />
                        </DIVFLEX>
                    </FLEX>
                </DIVFLEX>
            </Container>
        </Content>
    )
}

export default SubHeader
