import React from 'react'
import { FLEXCOULOM, Labels } from '../../GlobalStyle/AuthStyle'
import { ButoonLogin } from '../../GlobalStyle/ButtonsStyles'
import { CardDIVFLEXResp, DivBox, DIVFLEX, FLEX, Spans } from '../../GlobalStyle/Global'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import logo from '../../Assets/image 33.png'
import rate from '../../Assets/Icon/rating3.png'
import like from '../../Assets/Icon/btn-basic.png'
import { Container, Content } from '../../GlobalStyle/LayoutStyle'
import Dropdown from '../../GlobalStyle/Home/Dropdown'
import down from '../../Assets/Icon/right.png'
import up from '../../Assets/Icon/left.png'

const ItemsCards = [
    { image: logo, title: "Canon Cmera EOS 2000, Black 10x zoom", subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua", price: 998.00, status: "Free Shipping", order: 123, rate: 7.5 },
    { image: logo, title: "GoPro HERO6 4K Action Camera - Black", subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua", price: 543.00, status: "Free Shipping", order: 123, rate: 6.5 },
    { image: logo, title: "GoPro HERO6 4K Action Camera - Black", subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua", price: 658.00, status: "Free Shipping", order: 35, rate: 3.5 },
    { image: logo, title: "GoPro HERO6 4K Action Camera - Black", subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua", price: 998.00, status: "Free Shipping", order: 123, rate: 4.5 },
    { image: logo, title: "GoPro HERO6 4K Action Camera - Black", subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua", price: 233.00, status: "Free Shipping", order: 123, rate: 2.5 },
    { image: logo, title: "GoPro HERO6 4K Action Camera - Black", subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua", price: 998.00, status: "Free Shipping", order: 767, rate: 9.5 },
    { image: logo, title: "GoPro HERO6 4K Action Camera - Black", subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua", price: 232.00, status: "Free Shipping", order: 987, rate: 6.5 },
    { image: logo, title: "GoPro HERO6 4K Action Camera - Black", subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua", price: 998.00, status: "Free Shipping", order: 897, rate: 2.5 },
    { image: logo, title: "GoPro HERO6 4K Action Camera - Black", subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua", price: 678.00, status: "Free Shipping", order: 345, rate: 8.5 },
    { image: logo, title: "GoPro HERO6 4K Action Camera - Black", subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua", price: 129.00, status: "Free Shipping", order: 565, rate: 5.5 },
]
function ItemsCard({ show, handeelShow }) {
    console.log(show)
    return (
        <Container>
            <Content
                BoderRaduis={"6px"}
                padding={".6rem"}
                marginTop={"1rem"}
                width={show ? "100%" : "100%"}
                background={"#EFF2F4"}
                flexWrap={"wrap"}
            >
                <CardDIVFLEXResp
                    display={show ? "block" : "grid"}
                    flexWrap={"wrap"}

                >
                    {ItemsCards.map((item) => (
                        <DIVFLEX
                            margin={"1rem"}
                            paddingAll={"1rem"}
                            display={show ? "flex" : "block"}
                            background={"#FFFF"}
                            width={show?"100%":""}
                            alignItems={"flex-start"}
                        >
                            <DIVFLEX
                                display={show ? "flex" : "block"}
                            >
                                <Image
                                    marginRights={".4"}
                                    width={"180px"}
                                    height={"180px"}
                                    src={item.image} />
                                <FLEXCOULOM>
                                    <FLEX
                                        width={show ? "840px" : "auto"}
                                        justifyContent={"space-between"}>
                                        <Pargraph cursor={"pointer"} width={"100%"}> {item.title} </Pargraph>
                                        <Image
                                            marginRights={".4"}
                                            src={like} />
                                    </FLEX>
                                    <Pargraph cursor={"pointer"} width={"120px"}> ${item.price} </Pargraph>
                                    <FLEX>
                                        <Image
                                            marginRights={".4"}
                                            src={rate} />
                                        <Labels margin={".5rem"} color={"#FF9017"}>{item.rate}</Labels>
                                        <Labels margin={".7rem"} color={"#8B96A5"}>{item.order} orders</Labels>
                                        <Labels margin={".7rem"} color={"#00B517"}>{item.status}</Labels>
                                    </FLEX>
                                    <Spans
                                        color={"#505050"}
                                        fontSize={""}
                                        marginTop={".7rem"}
                                        width={show ? "560px" : "100%"}

                                    >{item.subTitle}  </Spans>
                                    <Pargraph>
                                        <ButoonLogin
                                            background={"transparent"}
                                            fontSize={"16"}
                                            color={"#0D6EFD"}
                                            width={"auto"}
                                            marginTop={".8rem"}
                                            padding={"0"}
                                        >View details</ButoonLogin>
                                    </Pargraph>
                                </FLEXCOULOM>
                            </DIVFLEX>


                        </DIVFLEX>
                    ))}
                </CardDIVFLEXResp>
                <DIVFLEX justifyContent="right">
                    <Dropdown borderAll={"1px"}
                        width={"140px"}
                        text={"Show 10"}
                    />

                    <Content
                        BoderRaduis={"6px"}
                        padding={".6rem"}
                        marginTop={"0"}
                        background={"#EFF2F4"}
                    >
                        <FLEX>
                            
                            <DivBox>
                            <Image
                                marginRights={".4"}

                                src={up} />
                            </DivBox>
                            <DivBox>
                                5
                            </DivBox>
                            <DivBox>
                                5
                            </DivBox>
                            <DivBox>
                                5
                            </DivBox>
                            <DivBox>
                            <Image
                                marginRights={".4"}
                                src={down} />
                            </DivBox>
                            
                        </FLEX>
                    </Content>
                </DIVFLEX>

            </Content>
        </Container>
    )
}

export default ItemsCard
