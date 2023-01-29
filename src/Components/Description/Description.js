import React from 'react'
import { FLEXCOULOM } from '../../GlobalStyle/AuthStyle'
import { DIVFLEX, FLEX } from '../../GlobalStyle/Global'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { Content } from '../../GlobalStyle/LayoutStyle'
import check from '../../Assets/Icon/check.png'
import Tab from './Tab'
const checkData = [
    { image: check, name: "Some great feature name here" },
    { image: check, name: "Lorem ipsum dolor sit amet, consectetur " },
    { image: check, name: "Duis aute irure dolor in reprehenderit" },
    { image: check, name: "Some great feature name here" },
]
const listData = [
    { name: "Model", text: "#8786867" },
    { name: "Style", text: "Classic style" },
    { name: "Certificate", text: "ISO-898921212" },
    { name: "Size", text: "34mm x 450mm x 19mm" },
    { name: "Memory", text: "36GB RAM" },
]
function Description() {
    return (
        <Content
            padding={"0"}
            marginTop={"1rem"}
            BoderRaduis={"6px"}
            border={"1px solid #dddedf"}
            background={"#FFFF"}
            width={"72%"}
            margin={"1rem"}
        >
            <Tab />
            <FLEXCOULOM padding={"1rem"}>
                {listData.map((item) => (
                    <FLEX>
                        <Pargraph border={"1px solid #8b96a54a"}
                            line={2} width={"200px"}
                            padding={".5"}
                            background={"#EFF2F4"}
                            margin={".5rem"} color={"#505050"}>{item.name}</Pargraph>
                        <Pargraph border={"1px solid #8b96a54a"} padding={".5"}
                            line={2} width={"200px"}
                            margin={".5rem"} color={"#505050"}>{item.text}</Pargraph>
                    </FLEX>
                ))}
            </FLEXCOULOM>
            <FLEXCOULOM padding={"1rem"}>
                {checkData.map((item) => (
                    <FLEX>
                        <Image
                            marginRights={".4"}
                            src={item.image} />
                        <Pargraph line={2} width={"100%"}
                            margin={".5rem"} color={"#505050"}>{item.name}</Pargraph>
                    </FLEX>
                ))}
            </FLEXCOULOM>

        </Content>

    )
}

export default Description
