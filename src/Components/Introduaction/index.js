import React from 'react'
import { DIVFLEX, DIVFLexRight, DIVFLexRightNone, FLEX, Span } from '../../GlobalStyle/Global'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { AbsoulteDiv, BoxColor, Li, RelativeDiv, Ul } from '../../GlobalStyle/LayoutStyle'
import Banner from '../../Assets/Banner-board-800x420 2.png'
import TITLE from '../TitleComponent/index'
import { Buttons } from '../AuthComponents/Buttons'
import avetar from '../../Assets/Avatar.png'
import { getUserName } from '../../Context/Auth'
import { FLEXCOULOM } from '../../GlobalStyle/AuthStyle'
function Index() {
    return (
        <DIVFLEX
            background={"#FFFF"}
            marginTop={"1.5rem"}
            padding={"1rem"}
            justifyContent={"space-around"}
        >
            <DIVFLexRightNone >
                <Ul>
                    <Li> Automobiles </Li>
                    <Li> Clothes and wear </Li>
                    <Li> Home interiors </Li>
                    <Li> Computer and tech </Li>
                    <Li> Tools, equipments </Li>
                    <Li> Sports and outdoor</Li>
                    <Li> Animal and pets </Li>
                    <Li> Machinery tools </Li>
                    <Li> More category   </Li>
                </Ul>
            </DIVFLexRightNone>
            <RelativeDiv>
                <Image
                    src={Banner}
                    height={"450px"}
                    width={"100%"}
                 />
                <AbsoulteDiv>
                    <TITLE fontWeight={"400"} title={"Latest trending"} />
                    <TITLE title={"Electronic items"} />
                    <Buttons
                        marginTop={"1.5"}
                        width={"120px"}
                        color={"#1C1C1C"}
                        name={"Learn more"}
                        padding={".8"}
                        background={"#FFFF"}
                    />
                </AbsoulteDiv>

            </RelativeDiv>

            <DIVFLexRight>
                <BoxColor
                    padding={"1rem"}
                    background={"#E3F0FF"}>
                    <FLEX>
                        <Image marginRights={"1"} src={avetar} alt="avetar" />
                        <FLEXCOULOM>

                            <Pargraph width={"120px"}>
                                Hi, {getUserName()}
                            </Pargraph>
                            <Pargraph width={"120px"} >
                                let’s get stated
                            </Pargraph>
                        </FLEXCOULOM>
                    </FLEX>
                    <Buttons
                        color="#FFFF"
                        name={"Join now"} />
                    <Buttons
                        color="#0D6EFD"
                        marginTop={".5"}
                        padding={".8"}
                        background={"#FFFF"}
                        name={"Log in"} />
                </BoxColor>
                <BoxColor
                    padding={"1rem"}
                    background={"#F38332"}>
                    <Span>
                        Get US $10 off with a new supplier
                    </Span>

                </BoxColor>
                <BoxColor background={"#55BDC3"}>
                    <Span>
                        Send quotes with supplier preferences
                    </Span>
                </BoxColor>
            </DIVFLexRight>

        </DIVFLEX>
    )
}

export default Index
