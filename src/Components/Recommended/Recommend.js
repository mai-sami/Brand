import React from 'react'
 import { DIVFLexRight, DivFlexWrapper } from '../../GlobalStyle/Global'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { Container } from '../../GlobalStyle/LayoutStyle'
import TITLE from '../TitleComponent/index'
import logo from '../../Assets/Clothes/2 1.png'
import logo2 from '../../Assets/Clothes/Bitmap.jpg'
import logo4 from '../../Assets/Clothes/Bitmap.png'
import logo3 from '../../Assets/Clothes/image 24.png'
import logo5 from '../../Assets/Clothes/image 26.png'
import logo6 from '../../Assets/Clothes/image 85.png'
import logo7 from '../../Assets/Clothes/image 86.png'
import logo8 from '../../Assets/Clothes/image 90.png'
import { BoxCards } from '.'

const cardData = [
    { dec: "T-shirts with multiple colors, for men", price: 10.30, image: logo },
    { dec: "T-shirts with multiple colors, for men", price: 10.30, image: logo2 },
    { dec: "T-shirts with multiple colors, for men", price: 10.30, image: logo3 },
    { dec: "T-shirts with multiple colors, for men", price: 10.30, image: logo4 },
    { dec: "T-shirts with multiple colors, for men", price: 10.30, image: logo5 },
    { dec: "T-shirts with multiple colors, for men", price: 10.30, image: logo6 },
    { dec: "T-shirts with multiple colors, for men", price: 10.30, image: logo7 },
    { dec: "T-shirts with multiple colors, for men", price: 10.30, image: logo5 },
    { dec: "T-shirts with multiple colors, for men", price: 10.30, image: logo8 },
    { dec: "T-shirts with multiple colors, for men", price: 10.30, image: logo },

]

function Recommend() {
    return (
        <Container>
            <TITLE marginBottom={"1"} margin={"1"} title={"Recommended items"} />
            <DivFlexWrapper column={"1"}>
                {cardData.map((item) => (
                    <BoxCards margin={".2rem"}>
                        <Image
                            width={"140"}
                            height={"150"}
                            src={item.image} />
                        <DIVFLexRight>
                            <Pargraph fontSize={"14"} color={"#1C1C1C"}>
                                
                               ${item.price}
                            </Pargraph>
                            <Pargraph fontSize={"14"}>
                                {item.dec}
                            </Pargraph>
                        </DIVFLexRight>
                    </BoxCards>
                ))}
            </DivFlexWrapper>


        </Container>
    )
}

export default Recommend
