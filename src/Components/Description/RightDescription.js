import React from 'react'
import { FLEXCOULOM, Labels } from '../../GlobalStyle/AuthStyle'
import { DIVFLEX, FLEX } from '../../GlobalStyle/Global'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { Content } from '../../GlobalStyle/LayoutStyle'
import TITLE from '../TitleComponent/index'
import Description from './Description'
import list from '../../Assets/Clothes/Bitmap.jpg'
import image2 from '../../Assets/image 30.png'
import image3 from '../../Assets/Clothes/2 1.png'
import image4 from '../../Assets/asser/image 25.png'
import image5 from '../../Assets/asser/Bitmap.png'


const Data = [
    { image: list, name: "Apple Watch Series Space Gray", price: "$7.00 - $99.50" },
    { image: image2, name: "Apple Watch Series Space Gray", price: "$7.00 - $99.50" },
    { image: image3, name: "Apple Watch Series Space Gray", price: "$7.00 - $99.50" },
    { image: image4, name: "Apple Watch Series Space Gray", price: "$7.00 - $99.50" },
    { image: image5, name: "Apple Watch Series Space Gray", price: "$7.00 - $99.50" },

]
export function RightDescription() {
    return (
        <Content
            padding={".6rem"}
            marginTop={"1rem"}
            BoderRaduis={"6px"}
            border={"1px solid #dddedf"}
            background={"#FFFF"}
            width={"25%"}
            margin={"1rem"}
        >
            <TITLE fontSize={"30px"} fontWeight={"bolder"} color={"#1C1C1C"}
                title={"You may like"} />
            <FLEXCOULOM>
                {Data.map((item) => (
                    <DIVFLEX>
                        <FLEX marginLeft={".5"} padding={".3rem"} >
                            <Image
                                marginRights={".4"}
                                width={"66px"}
                                height={"65px"}
                                padding={"1rem"}
                                border={"1px solid #8b96a54a"}
                                src={item.image} />
                            <FLEXCOULOM alignItems={"center"} margin={"1rem"}>
                                <Pargraph cursor={"pointer"} width={"150px"}> {item.name} </Pargraph>
                                <Pargraph line={2} fontWeight={"400"} cursor={"pointer"} width={"150px"}> {item.price} </Pargraph>

                            </FLEXCOULOM>
                        </FLEX>
                    </DIVFLEX>
                ))}

            </FLEXCOULOM>

        </Content>
        
    )
}

export function DescriptionAll() {
    return (
        <DIVFLEX>
            <Description />
            <RightDescription />
        </DIVFLEX>

    )
}