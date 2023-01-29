import React from 'react'
import { DIVFLEX, DIVFLEXBrder, DIVFLexRight, FLEX } from '../../../GlobalStyle/Global'
import TITLE from '../../TitleComponent/index'
import logo from '../../../Assets/image 35.png'
import logo1 from '../../../Assets/image 28.png'
import logo2 from '../../../Assets/Clothes/image 86.png'
import logo3 from '../../../Assets/Clothes/image 85.png'
import logo4 from '../../../Assets/image 29.png'
import logo5 from '../../../Assets/image 32.png'
import logo6 from '../../../Assets/image 34.png'
import logo7 from '../../../Assets/image 35.png'
import './index.css'
import { Image, Pargraph } from '../../../GlobalStyle/Home/SubscribeStyle'
import { BoxCulomOutdoors, BoxCulomShear } from '../style'
import { Buttons } from '../../AuthComponents/Buttons'
const OfferData = [
    { text: "Smart watches", price: "From USD 19", image: logo },
    { text: "Cameras", price: "From USD 10", image: logo1 },
    { text: "Headphones", price: "From USD 10", image: logo2 },
    { text: "Smart watches", price: "From USD 10", image: logo3 },
    { text: "Gaming set", price: "From USD 10", image: logo4 },
    { text: "Laptops & PC", price: "From USD 10", image: logo5 },
    { text: "Smartphones", price: "From USD 10", image: logo6 },
    { text: "Electric kattle", price: "From USD 10", image: logo7 },

]
function ConsumerEectronics() {
    return (
        <DIVFLEX marginTop={"1rem"}
            background={"#FFFF"}
            justifyContent={"center"}>

            <BoxCulomShear className='tests'>
                <TITLE title={"Consumer electronics and gadgets"} />
                <Buttons
                    marginTop={"1.5"}
                    width={"120px"}
                    color={"#1C1C1C"}
                    name={"Source now"}
                    padding={".8"}
                    background={"#FFFF"}
                />
            </BoxCulomShear>
            <DIVFLEXBrder >
                {OfferData.map((item) => (
                    <BoxCulomOutdoors width={"218.8px"}>
                        <DIVFLEX>
                            <DIVFLexRight>
                                <Pargraph
                                    line={"1"}
                                    width={"130px"}
                                >
                                    {item.text}
                                </Pargraph>
                                <Pargraph
                                    line={"2"}
                                    width={"130px"}
                                >{item.price}</Pargraph>

                            </DIVFLexRight>
                            <Image
                                width={"70px"}
                                height={"60"}
                                src={item.image} />
                        </DIVFLEX>
                    </BoxCulomOutdoors>
                ))
                }
            </DIVFLEXBrder>

        </DIVFLEX >
    )
}


 
export default ConsumerEectronics
