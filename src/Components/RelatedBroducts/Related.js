import React from 'react'
import { FLEXCOULOM, Labels } from '../../GlobalStyle/AuthStyle'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { Content } from '../../GlobalStyle/LayoutStyle'
import TITLE from '../TitleComponent/index'
import logo from '../../Assets/image 33.png'
import logo2 from '../../Assets/Clothes/image 24.png'
import logo3 from '../../Assets/Clothes/image 26.png'
import logo4 from '../../Assets/Clothes/image 86.png'
import logo5 from '../../Assets/Clothes/image 90.png'
import { DIVFLEX } from '../../GlobalStyle/Global'

const DataReate = [
    { name: "Xiaomi Redmi 8 Original", image: logo, price: "$32.00-$40.00" },
    { name: "Xiaomi Redmi 8 Original", image: logo2, price: "$32.00-$40.00" },
    { name: "Xiaomi Redmi 8 Original", image: logo3, price: "$32.00-$40.00" },
    { name: "Xiaomi Redmi 8 Original", image: logo4, price: "$32.00-$40.00" },
    { name: "Xiaomi Redmi 8 Original", image: logo5, price: "$32.00-$40.00" }

]
function Related() {
    return (
        <Content
            padding={".6rem"}
            marginTop={"1rem"}
            BoderRaduis={"6px"}
            border={"1px solid #dddedf"}
            background={"#FFFF"}
        >
            <TITLE fontSize={"30px"} fontWeight={"bolder"} color={"#1C1C1C"}
                title={"Related products"} />
            <DIVFLEX>
                {DataReate.map((item) => (
                    <FLEXCOULOM alignItems={"center"} margin={"1rem"}>
                        <Image
                            width={"180px"}
                            height={"180px"}
                            src={item.image} />
                        <Pargraph cursor={"pointer"} width={"120px"}> {item.name}  </Pargraph>
                        <Labels margin={".7rem"} color={"#8B96A5"}> {item.price}</Labels>

                    </FLEXCOULOM>
                ))}
            </DIVFLEX>

        </Content>
    )
}

export default Related
