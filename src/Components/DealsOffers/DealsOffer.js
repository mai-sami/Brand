import React from 'react'
import {DIVFLEXBrder, DIVFLexRight } from '../../GlobalStyle/Global'
import TITLE from '../TitleComponent/index'
import logo from '../../Assets/image 23.png'
import logo1 from '../../Assets/image 28.png'
import logo2 from '../../Assets/image 30.png'
import logo3 from '../../Assets/image 29.png'
import logo4 from '../../Assets/image 35.png'
 import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { BoxCulom, BoxCulomShear, DivPrice } from './style'
import TimeOffer from './TimeOffer'

const OfferData = [
    { text: "Arabic Emirates", price: 12, image: logo },
    { text: "Australia", price: 12, image: logo1 },
    { text: "United States", price: 12, image: logo2 },
    { text: "Russia", price: 45, image: logo3 },
    { text: "Italy", price: 32, image: logo4 },
 
]
function DealsOffer() {
    return (
        <DIVFLEXBrder marginTop={"1rem"}
            background={"#FFFFFF"}
            justifyContent={"start"}>
            <BoxCulomShear >
                <TITLE title={"Deals and offers"} />
                <Pargraph line={3}>
                    Hygiene equipments
                </Pargraph>
                <TimeOffer />
            </BoxCulomShear>
            {OfferData.map((item) => (
                <BoxCulom border={"1px solid #E3E8EE"} width={"222.5px"}>
                    <DIVFLexRight >
                        <Image
                            width={"120px"}
                            height={"120"}
                            src={item.image} />
                        <Pargraph
                             line={"5"}
                            width={"auto"}
                            >
                            {item.text}
                        </Pargraph>
                        <DivPrice>{item.price}%</DivPrice>
                    </DIVFLexRight>
                </BoxCulom>
            ))}

        </DIVFLEXBrder>
    )
}

export default DealsOffer
