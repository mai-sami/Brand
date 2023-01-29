import React from 'react'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { Container } from '../../GlobalStyle/LayoutStyle'
import { CircelsDiv, ServiceCards } from '../Recommended'
import TITLE from '../TitleComponent/index'
import logo from '../../Assets/image 106 (1).png'
import { DIVFLexRight, DivFlexWrapper } from '../../GlobalStyle/Global'
import logo1 from '../../Assets/image 104 (1).png'
import logo2 from '../../Assets/image 108 (1).png'
import logo3 from '../../Assets/image 107.png'
import icon from '../../Assets/Icon/security.png'
import icon2 from '../../Assets/Icon/Vector.png'
import icon3 from '../../Assets/Icon/VectorM.png'
import icon4 from '../../Assets/Icon/Vectors.png'

const cardData = [
    { text: "Source from Industry Hubs", image: logo, icon: icon },
    { text: "Customize Your Products", image: logo1, icon: icon2 },
    { text: "Fast, reliable shipping by ocean or air", image: logo2, icon: icon3 },
    { text: "Product monitoring and inspection", image: logo3, icon: icon4 },
]
function Index() {
    return (
        <Container>
            <TITLE marginBottom={"1"} margin={"1"} title={"Our extra services"} />
            <DivFlexWrapper column={"1"}>
                {cardData.map((item) => (
                    <ServiceCards>
                        <Image
                            width={"auto"}
                            height={"150"}
                            src={item.image} />
                        <CircelsDiv>
                            <Image
                                src={item.icon} />
                        </CircelsDiv>
                        <DIVFLexRight>
                            <Pargraph padding={"1"} fontSize={"14"} color={"#1C1C1C"}>
                                {item.text}
                            </Pargraph>
                        </DIVFLexRight>
                    </ServiceCards>
                ))}

            </DivFlexWrapper>
            <br></br>

        </Container>
    )
}

export default Index
