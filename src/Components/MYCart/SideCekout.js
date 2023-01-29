import React from 'react'
import { FLEXCOULOM, HR, INPUT, Labels } from '../../GlobalStyle/AuthStyle'
import { DIVFLEX, FLEX } from '../../GlobalStyle/Global'
import { Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { Content } from '../../GlobalStyle/LayoutStyle'
import { Buttons } from '../AuthComponents/Buttons'
import Payment from '../Footer/Payment'
const secandData = [
    { name: "Subtotal: ", text: "$1403.97" },
    { name: "Discount: ", text: "- $60.00" },
    { name: "Tax:  ", text: "+ $14.00 " },
]

function SideCekout() {
    return (
        <FLEXCOULOM>
            <Content
                padding={".9rem"}
                marginTop={"1rem"}
                BoderRaduis={"6px"}
                border={"1px solid #dddedf"}
                background={"#FFFF"}
                width={"90%"}
                margin={"1rem"}
            >
                <Labels margin={".7rem"} fontSize={"20px"} color={"#505050"}> Have a coupon?</Labels>
                <FLEX>
                    <INPUT
                        width={"55%"}
                        placeholder='Add coupon' />
                    <Buttons
                        name={"Apply"}
                        color={"#0D6EFD"}
                        background={"#FFFFFF"}
                        border={"1px solid #8b96a54a"}
                        padding={"1"}
                        width={"100px"}
                    />
                </FLEX>
            </Content>
            <Content
                padding={".6rem"}
                marginTop={"1rem"}
                BoderRaduis={"6px"}
                border={"1px solid #dddedf"}
                background={"#FFFF"}
                width={"93%"}
                margin={"1rem"}
            >
                <FLEXCOULOM>

                    {secandData.map((item) => (

                        <DIVFLEX justifyContent={"left"}>
                            <Pargraph

                                line={1}
                                padding={".5"}
                                margin={".3rem"} width={"100%"} color={"#8B96A5"}>{item.name}</Pargraph>
                            <Pargraph
                                line={1}
                                padding={".5"}
                                margin={".3rem"} color={"##00B517"}>{item.text}</Pargraph>
                        </DIVFLEX>
                    ))}
                </FLEXCOULOM>
                <HR></HR>
                <DIVFLEX >
                    <Pargraph

                        line={1}
                        padding={".5"}
                        margin={".3rem"} width={"100%"} color={"#8B96A5"}>Total:</Pargraph>
                    <Pargraph
                        line={1}
                        padding={".5"}
                        margin={".3rem"} color={"##00B517"}>$1357.97</Pargraph>
                </DIVFLEX>

                <Buttons
                    name={"Checkout"}
                    color={"#FFFF"}
                    background={"#00B517"}
                    border={"1px solid #8b96a54a"}
                    padding={"1"}
                    width={"100%"}
                />
                <Payment justifyContent={"center"} margin={"1rem"} />

            </Content>
        </FLEXCOULOM>
    )
}

export default SideCekout
