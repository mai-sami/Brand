import React from 'react'
import { FLEXCOULOM } from '../../GlobalStyle/AuthStyle'
import { DivBox, DIVFLEX, FLEX } from '../../GlobalStyle/Global'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import massge from '../../Assets/Icon/Icon Color.png'
import closse from '../../Assets/Icon/close.png'
import bus from '../../Assets/Icon/bus.png'

const subData = [
    { image: closse, text: "Secure payment", dec: "Have you ever finally just " },
    { image: massge, text: "Verified Seller", dec: "Have you ever finally just " },
    { image: bus, text: "Free delivery", dec: "Have you ever finally just " },
]
function Chooses() {
    return (
        <>
            <DIVFLEX margin={"2rem 0 0 0 "}>
                {subData.map((item) => (
                    <FLEX marginLeft={"1"}>
                        <DivBox
                             background={"#E3E8EE"}
                            width={"26px"}
                            padding={".6rem"}
                            margin={"1rem"}
                            borderRadius={"50%"}
                            height={"26px"}>
                            <Image
                                 src={item.image} />
                        </DivBox>

                        <FLEXCOULOM>
                            <Pargraph
                                line={1.5} width={"200px"}
                                margin={".3rem"} color={"#505050"}>{item.text}
                            </Pargraph>
                            <Pargraph
                                line={1.5} width={"200px"}
                                margin={".3rem"} color={"#A9ACB0"}>{item.dec}
                            </Pargraph>
                        </FLEXCOULOM>
                    </FLEX>
                ))}
            </DIVFLEX>
        </>
    )
}

export default Chooses
