import React from 'react'
import { DIVFLEX, DIVFLEXBrder, DIVFLexRight, FLEX } from '../../../GlobalStyle/Global'
import TITLE from '../../TitleComponent/index'
import logo from '../../../Assets/rasm.png'
import logo1 from '../../../Assets/rasma.png'
import logo2 from '../../../Assets/sa.png'
import logo3 from '../../../Assets/ss.png'
import logo4 from '../../../Assets/image 88.png'
import logo5 from '../../../Assets/image 89.png'
import logo6 from '../../../Assets/image 87.png'
import logo7 from '../../../Assets/image 90.png'
import './index.css'
import { Image, Pargraph } from '../../../GlobalStyle/Home/SubscribeStyle'
import { BoxCulomOutdoors, BoxCulomShear } from '../style'
import { Buttons } from '../../AuthComponents/Buttons'
const OfferData = [
    { text: "Arabic Emirates", price: "From USD 10", image: logo },
    { text: "Australia", price: "From USD 10", image: logo1 },
    { text: "United States", price: "From USD 10", image: logo2 },
    { text: "United States", price: "From USD 10", image: logo3 },
    { text: "United States", price: "From USD 10", image: logo4 },
    { text: "United States", price: "From USD 10", image: logo5 },
    { text: "United States", price: "From USD 10", image: logo6 },
    { text: "United States", price: "From USD 10", image: logo7 },

]
function HomeOutdoors() {
    return (
        <DIVFLEX marginTop={"1rem"}
            background={"#FFFF"}
            justifyContent={"center"}>

            <BoxCulomShear className='as'>
                <TITLE title={"Deals and offers"} />
                <Pargraph line={3}>
                    Hygiene equipments
                </Pargraph>
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
                                width={"90px"}
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


export default HomeOutdoors
