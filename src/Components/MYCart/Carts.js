import React from 'react'
import { FLEXCOULOM, FLEXCOULOMCard } from '../../GlobalStyle/AuthStyle'
import { DIVFLEX, FLEX } from '../../GlobalStyle/Global'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { Content } from '../../GlobalStyle/LayoutStyle'
import TITLE from '../TitleComponent/index'
import Chooses from './Chooses'
import Logo from '../../Assets/asser/image 34.png'
import { Buttons } from '../AuthComponents/Buttons'
import Dropdown from '../../GlobalStyle/Home/Dropdown'
import left from '../../Assets/Icon/leftIcons.png'

function Carts() {
    return (
        <FLEXCOULOMCard width={"70%"} >

            <TITLE fontSize={"30px"} fontWeight={"bolder"} color={"#1C1C1C"}
                title={" Layer Slim Muscle "} />
            <Content
                padding={".6rem"}
                marginTop={"1rem"}
                BoderRaduis={"6px"}
                border={"1px solid #dddedf"}
                background={"#FFFF"}
                width={"100%"}
                margin={"1rem"}
            >
                <DIVFLEX>
                    <FLEX>
                        <Image
                            marginRights={"2"}
                            width={"120px"}
                            border={"1px solid #dddedf"}
                            padding={".3rem"}
                            height={"120px"}
                            src={Logo} />
                        <FLEXCOULOM   >
                            <Pargraph
                                line={1} width={"100%"}
                                padding={".5"}
                                margin={".3rem"} color={"#1C1C1C"}>T-shirts with multiple colors, for men and lady</Pargraph>
                            <DIVFLEX>
                                <Pargraph
                                    fontWeight={"400"}
                                    line={1} width={"300px"}
                                    padding={".5"}
                                    margin={".3rem"} color={"#8B96A5"}>
                                    Size: medium, Color: blue,  Material: Plastic
                                    Seller: Artel Market
                                </Pargraph>

                            </DIVFLEX>
                            <FLEX>

                                <Buttons
                                    name={"Remove"}
                                    color={"#FA3434"}
                                    background={"#FFFFFF"}
                                    border={"1px solid #8b96a54a"}
                                    width={"130px"}
                                    margin={".5rem"}

                                />
                                <Buttons
                                    margin={".5rem"}
                                    name={"Save for later"}
                                    color={"#0D6EFD"}
                                    background={"#FFFFFF"}
                                    border={"1px solid #8b96a54a"}
                                    width={"130px"}
                                />
                            </FLEX>
                        </FLEXCOULOM>
                    </FLEX>
                    <FLEXCOULOM justifyContent={"right"}>
                        <Pargraph
                            textAlign={"right"}
                            fontSize={"20"}
                            line={1} width={"100px"}
                            padding={".5"}
                            margin={".3rem"} color={"#1C1C1C"}>
                            $78.99
                        </Pargraph>
                        <Dropdown borderAll={"1px"}
                            width={"140px"}
                            text={"Qty: 9"}
                        />
                    </FLEXCOULOM>
                </DIVFLEX>
                <FLEXCOULOM border={"1px solid #dddedf"}
                >
                    <DIVFLEX>
                    <FLEX>

                    <Image
                              margin={"1rem"}
                             position={"absolute"}
                            src={left} />
                        <Buttons
                            margin={".5rem"}
                            name={"Back to shop"}
                            color={"#FFFF"}
                            background={"#0D6EFD"}
                            border={"1px solid #8b96a54a"}
                            width={"150px"}
                            />
                            </FLEX>
                        <Buttons
                            margin={".5rem"}
                            name={"Remove all"}
                            color={"#0D6EFD"}
                            background={"#FFFFFF"}
                            border={"1px solid #8b96a54a"}
                            width={"130px"}
                        />

                    </DIVFLEX>

                </FLEXCOULOM>
            </Content>
            <Chooses />

        </FLEXCOULOMCard>
    )
}

export default Carts
