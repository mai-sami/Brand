import React, { useState } from 'react'
import { DIVFLEX, FLEX } from '../../GlobalStyle/Global'
import Dropdown from '../../GlobalStyle/Home/Dropdown'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { Container, Content } from '../../GlobalStyle/LayoutStyle'
import { RememberCheckbox } from '../AuthComponents/RememberCheckbox'
import sequar from '../../Assets/Icon/sequar.png'
import list from '../../Assets/Icon/listColor.png'

function TotalHeader({ handeelShow, handeelShowBlok }) {

    return (
        <Container>
            <Content
                BoderRaduis={"6px"}
                padding={".6rem"}
                background={"#FFFFFF"}>
                <DIVFLEX>
                    <FLEX>
                        <Pargraph padding={".3"} cursor={"pointer"} line={"2.2"} color={"#8B96A5"} width={" "}>  12,911 items in  </Pargraph>
                        <Pargraph fontWeight={"700"} cursor={"pointer"} line={"2.2"} color={"#1C1C1C"} width={" "}>  Mobile accessory </Pargraph>
                    </FLEX>
                    <FLEX>

                        <RememberCheckbox>
                            <Pargraph cursor={"pointer"} width={"120px"}> Verified only </Pargraph>

                        </RememberCheckbox>
                        <Dropdown borderAll={"1px"}
                            width={"140px"}
                            text={"Featured"}
                        />
                        <FLEX marginLeft={".5"} padding={".7rem"} borderall={"1px solid #eee"}>

                            <Image
                                marginRights={".4"}
                                src={sequar}
                                onClick={handeelShow}
                            />
                            <Image
                                marginRights={".4"}
                                width={"18px"}
                                height={"16px"}
                                onClick={handeelShowBlok}
                                src={list} />
                        </FLEX>
                    </FLEX>
                </DIVFLEX>
            </Content>
        </Container>
    )
}

export default TotalHeader
