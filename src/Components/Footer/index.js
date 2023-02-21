import React from 'react'
import { FLEXCOULOM, FLEXCOULOMFooter } from '../../GlobalStyle/AuthStyle'
import {FLEX, Spans } from '../../GlobalStyle/Global'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { Container, Content } from '../../GlobalStyle/LayoutStyle'
import Logo from '../Logo'
import {FlexBETWEEN } from './style'
import google from '../../Assets/google (1).png'
import googleApp from '../../Assets/google (2).png'
import soical from '../../Assets/Icon/Fill 183.png'
import soical2 from '../../Assets/Icon/Fill 184.png'
import soical3 from '../../Assets/Icon/Fill 209.png'
import soical4 from '../../Assets/Icon/a.png'
import soical5 from '../../Assets/Icon/Combined Shape.png'

function Index() {
    return (
        <Content background={"#FFFF"}>
            <Container>
                <FlexBETWEEN>
                    <FLEXCOULOM>
                        <Logo />
                        <Spans
                            marginTop={"1rem"}
                            width={"276px"}
                            color="#505050"> Best information about
                            the company gies here but now lorem ipsum is </Spans>
                            <br></br>
                        <FLEX>
                        <Image marginRights={".4"} src={soical} alt="googleApp" />
                        <Image marginRights={".4"} src={soical2} alt="googleApp" />
                        <Image marginRights={".4"} src={soical3} alt="googleApp" />
                        <Image marginRights={".4"} src={soical4} alt="googleApp" />
                        <Image marginRights={".4"} src={soical5} alt="googleApp" />

                        </FLEX>
                    </FLEXCOULOM>
                    <FLEXCOULOMFooter>
                        <Pargraph line={"3"} color={"#1C1C1C"} width={"120px"}>  About </Pargraph>
                        <Pargraph line={"2"} color={"#8B96A5"} width={"120px"}>  About Us </Pargraph>
                        <Pargraph line={"2"} color={"#8B96A5"} width={"120px"}>  Find store </Pargraph>
                        <Pargraph color={"#8B96A5"} width={"120px"}>  Categories </Pargraph>
                        <Pargraph line={"2"} color={"#8B96A5"} width={"120px"}>  Blogs  </Pargraph>
                    </FLEXCOULOMFooter>
                    <FLEXCOULOMFooter>
                        <Pargraph line={"3"} color={"#1C1C1C"} width={"120px"}>  Partnership </Pargraph>
                        <Pargraph line={"2"} color={"#8B96A5"} width={"120px"}>  About Us </Pargraph>
                        <Pargraph line={"2"} color={"#8B96A5"} width={"120px"}>  Register </Pargraph>
                        <Pargraph line={"2"} color={"#8B96A5"} width={"120px"}>  Settings </Pargraph>
                        <Pargraph line={"2"} color={"#8B96A5"} width={"120px"}>  My Orders  </Pargraph>
                    </FLEXCOULOMFooter>
                    <FLEXCOULOMFooter>
                        <Pargraph line={"3"} color={"#1C1C1C"} width={"120px"}>  Information </Pargraph>
                        <Pargraph line={"2"} color={"#8B96A5"} width={"120px"}>  Help Center </Pargraph>
                        <Pargraph line={"2"} color={"#8B96A5"} width={"120px"}>  Money Refund </Pargraph>
                        <Pargraph line={"2"} color={"#8B96A5"} width={"120px"}>  Shipping </Pargraph>
                        <Pargraph line={"2"} color={"#8B96A5"} width={"120px"}>  Contact us  </Pargraph>
                    </FLEXCOULOMFooter>
                    <FLEXCOULOMFooter>
                        <Pargraph line={"3"} color={"#1C1C1C"} width={"120px"}>  For users </Pargraph>
                        <Pargraph line={"2"} color={"#8B96A5"} width={"120px"}>  Login </Pargraph>
                        <Pargraph line={"2"} color={"#8B96A5"} width={"120px"}>  Hot offers </Pargraph>
                        <Pargraph line={"2"} color={"#8B96A5"} width={"120px"}>  Gift boxes </Pargraph>
                        <Pargraph line={"2"} color={"#8B96A5"} width={"120px"}>  Projects  </Pargraph>
                    </FLEXCOULOMFooter>
                    <FLEXCOULOM>
                        <Pargraph line={"3"} color={"#1C1C1C"} width={"120px"}>  Get app </Pargraph>
                        <Image src={google} alt="googleApp" />
                        <br></br>
                        <Image src={googleApp} alt="googleApp" />
                    </FLEXCOULOM>
                </FlexBETWEEN>
            </Container>
        </Content>
    )
}

export default Index
