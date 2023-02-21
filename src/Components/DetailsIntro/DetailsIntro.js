import React from 'react'
import { FLEXCOULOM, HR, Labels } from '../../GlobalStyle/AuthStyle'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { Content } from '../../GlobalStyle/LayoutStyle'
import { DivBox, DIVFLEX, DIVFLEXResp, FLEX } from '../../GlobalStyle/Global'
import image1 from '../../Assets/image 36.png'
import image2 from '../../Assets/image 37.png'
import image3 from '../../Assets/image 39.png'
import image4 from '../../Assets/image 40.png'
import Logo from '../../Assets/asser/image 34.png'
import image5 from '../../Assets/asser/image 35.png'
import check from '../../Assets/Icon/check.png'
import TITLE from '../TitleComponent/index'
import iamgws from '../../Assets/assetRegion/CN@2x.png'
import Vector from '../../Assets/Icon/as.png'
import Vector2 from '../../Assets/Icon/Vector(1).png'
import { Buttons } from '../AuthComponents/Buttons'
import like from '../../Assets/Icon/btn-basic.png'
import rate from '../../Assets/Icon/rating3.png'
import massge from '../../Assets/Icon/Icon Color.png'
import cart from '../../Assets/Icon/Icon Colors.png'

const listData = [
    { name: "Type: ", text: "Classic  shoes" },
    { name: "Material: ", text: "Plastic material" },
    { name: "Design: ", text: "Modern nice" },
]
const secandData = [
    { name: "Customization: ", text: "Customized logo and design custom packages" },
    { name: "Protection: : ", text: "Refund Policy" },
    { name: "Warranty:  ", text: "2 years full warranty " },
]
const subData = [
    { image: iamgws, text: "Germany, Berlin" },
    { image: Vector, text: "Verified Seller" },
    { image: Vector2, text: "Worldwide shipping" },

]
function DetailsIntro() {
    return (
        <>
            <Content
                padding={"0"}
                marginTop={"0"}
                BoderRaduis={"6px"}
                border={"1px solid #dddedf"}
                background={"#FFFF"}
                margin={"0"}
            >
                <DIVFLEXResp alignItems={"flex-start"}
                    justifyContent={"space-around"}>

                    <FLEXCOULOM margin={"1rem"} alignItems={"center"}>
                        <Image
                            marginRights={".4"}
                            border={"1px solid #dddedf"}
                            padding={".3rem"}
                            margin={"1rem"}
                            width={"300px"}
                            src={Logo} />
                        <FLEX>
                            <Image
                                marginRights={".4"}
                                border={"1px solid #dddedf"}
                                padding={".3rem"}

                                src={image1} />
                            <Image
                                border={"1px solid #dddedf"}
                                marginRights={".4"}
                                src={image2} />
                            <Image
                                border={"1px solid #dddedf"}
                                padding={".3rem"}

                                marginRights={".4"}
                                src={image3} />
                            <Image
                                border={"1px solid #dddedf"}
                                padding={".3rem"}

                                marginRights={".4"}
                                src={image4} />
                            <Image
                                border={"1px solid #dddedf"}
                                padding={".3rem"}

                                marginRights={".4"}
                                src={image5} />
                        </FLEX>
                    </FLEXCOULOM>
                    <FLEXCOULOM>

                        <FLEX>
                            <Image
                                marginRights={".4"}
                                src={check} />
                            <Labels margins={".5rem"} color={"#00B517"}>In stock</Labels>
                        </FLEX>
                        <TITLE fontSize={"30px"} fontWeight={"bolder"} color={"#1C1C1C"}
                            title={"Mens Long Sleeve T-shirt Cotton Base "} />
                        <TITLE fontSize={"30px"} fontWeight={"bolder"} color={"#1C1C1C"}
                            title={" Layer Slim Muscle "} />
                        <br></br>

                        <FLEX>
                            <Image
                                marginRights={".4"}
                                src={rate} />
                            <Labels margin={".5rem"} fontSize={"20px"} color={"#FF9017"}>9.3</Labels>
                            <Image
                                marginRights={".4"}
                                src={massge} />
                            <Labels margin={".7rem"} fontSize={"20px"} color={"#787A80"}>32 reviews</Labels>
                            <Image
                                marginRights={".4"}
                                src={cart} />
                            <Labels margin={".7rem"} fontSize={"20px"} color={"#787A80"}> 154 sold</Labels>
                        </FLEX>
                        <br></br>
                        <DivBox
                            justifyContent={"space-around"}
                            background={"#FFF0DF"}
                            width={"100%"}
                            padding={".2rem"}
                            marginTop={"1rem"}
                            height={"unset"}>
                            <FLEXCOULOM>
                                <Pargraph fontSize={"20"} color={"#FA3434"} cursor={"pointer"} width={"auto"}> $98.00  </Pargraph>
                                <Pargraph fontSize={"20"} cursor={"pointer"} width={"auto"}> 50-100 pcs  </Pargraph>
                            </FLEXCOULOM>
                            <FLEXCOULOM>
                                <Pargraph fontSize={"20"} cursor={"pointer"} width={"auto"}> $90.00  </Pargraph>
                                <Pargraph fontSize={"20"} cursor={"pointer"} width={"auto"}> 100-700 pcs  </Pargraph>
                            </FLEXCOULOM>
                            <FLEXCOULOM>
                                <Pargraph fontSize={"20"} cursor={"pointer"} width={"auto"}> $78.00  </Pargraph>
                                <Pargraph fontSize={"20"} cursor={"pointer"} width={"auto"}> 700+ pcs </Pargraph>
                            </FLEXCOULOM>
                        </DivBox>
                        <br></br>
                        <DIVFLEX justifyContent={"left"}>
                            <Pargraph
                                line={1}
                                padding={".5"}
                                margin={".3rem"} width={"140px"} color={"#8B96A5"}>Price: </Pargraph>
                            <Pargraph
                                line={1} width={"200px"}
                                padding={".5"}
                                margin={".3rem"} color={"#505050"}>Negotiable </Pargraph>
                        </DIVFLEX>
                        <HR></HR>
                        <FLEXCOULOM margin={"0"}>
                            {listData.map((item) => (
                                <DIVFLEX justifyContent={"left"}>
                                    <Pargraph

                                        line={1}
                                        padding={".5"}
                                        margin={".3rem"} width={"140px"} color={"#8B96A5"}>{item.name}</Pargraph>
                                    <Pargraph
                                        line={1} width={"200px"}
                                        padding={".5"}
                                        margin={".3rem"} color={"#505050"}>{item.text}</Pargraph>
                                </DIVFLEX>

                            ))}
                        </FLEXCOULOM>
                        <HR></HR>

                        <FLEXCOULOM margin={"0"} >
                            {secandData.map((item) => (
                                <DIVFLEX justifyContent={"left"}>
                                    <Pargraph

                                        line={1}
                                        padding={".5"}
                                        margin={".3rem"} width={"140px"} color={"#8B96A5"}>{item.name}</Pargraph>
                                    <Pargraph
                                        line={1} width={"200px"}
                                        padding={".5"}
                                        margin={".3rem"} color={"#505050"}>{item.text}</Pargraph>
                                </DIVFLEX>

                            ))}
                        </FLEXCOULOM>
                    </FLEXCOULOM>
                    <FLEXCOULOM>

                        <Content
                            padding={".5rem"}
                            marginTop={"0"}
                            BoderRaduis={"6px"}
                            border={"1px solid #dddedf"}
                            background={"#FFFF"}
                            margin={"1rem auto"}

                        >
                            <FLEXCOULOM>

                                <FLEX                                >
                                    <DivBox
                                        background={"#C6F3F1"}
                                        width={"48px"}
                                        height={"48px"}>
                                        <Pargraph fontSize={"20"} cursor={"pointer"} width={"auto"}> R  </Pargraph>
                                    </DivBox>
                                    <FLEXCOULOM   >
                                        <Pargraph
                                            line={1} width={"200px"}
                                            padding={".5"}
                                            margin={".3rem"} color={"#505050"}>Supplier</Pargraph>
                                        <Pargraph
                                            line={1} width={"200px"}
                                            padding={".5"}
                                            margin={".3rem"} color={"#505050"}>Guanjoi Trading LLC</Pargraph>
                                    </FLEXCOULOM>
                                </FLEX>
                                <FLEXCOULOM border={"1px solid #dddedf"}
                                >
                                    {subData.map((item) => (
                                        <FLEX marginLeft={"1"}>
                                            <Image
                                                marginRights={".4"}
                                                src={item.image} />
                                            <FLEXCOULOM>
                                                <Pargraph
                                                    line={1} width={"200px"}
                                                    margin={".3rem"} color={"#505050"}>{item.text}
                                                </Pargraph>
                                            </FLEXCOULOM>
                                        </FLEX>
                                    ))}

                                </FLEXCOULOM>
                                <Buttons
                                    name={"Send inquiry"}
                                    color={"#FFFF"}
                                    background={"#0D6EFD"}
                                />
                                <Buttons
                                    name={"Seller’s profile"}
                                    color={"#0D6EFD"}
                                    background={"#FFFFFF"}
                                    border={"1px solid #8b96a54a"}
                                />

                            </FLEXCOULOM>
                        </Content>
                        <FLEX justifyContent={"center"}>
                            <Image
                                marginRights={".4"}
                                src={like} />
                            <Pargraph
                                line={1} width={"200px"}
                                color={"#505050"}>Guanjoi Trading LLC</Pargraph>
                        </FLEX>
                    </FLEXCOULOM>

                </DIVFLEXResp>

            </Content>
        </>
    )
}

export default DetailsIntro
