import React from 'react'
import logo from '../../Assets/assetRegion/2.png'
import logo1 from '../../Assets/assetRegion/3.png'
import logo2 from '../../Assets/assetRegion/AE@2x.png'
import logo3 from '../../Assets/assetRegion/CN@2x.png'
import logo4 from '../../Assets/assetRegion/DK@2x.png'
import logo5 from '../../Assets/assetRegion/FR@2x.png'
import logo6 from '../../Assets/assetRegion/GB@2x.png'
import logo7 from '../../Assets/assetRegion/IT@2x.png'
import logo8 from '../../Assets/assetRegion/RU@2x.png'
import logo9 from '../../Assets/assetRegion/US@2x.png'
import { FLEXCOULOM } from '../../GlobalStyle/AuthStyle'
import { DIVFLEXRight, DivFlexWrapper } from '../../GlobalStyle/Global'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { Container, Content } from '../../GlobalStyle/LayoutStyle'
import TITLE from '../TitleComponent/index'

const regionData = [
    { text: "Arabic Emirates", dec: "shopname.ae", image: logo },
    { text: "Australia", dec: "shopname.ae", image: logo1 },
    { text: "United States", dec: "shopname.ae", image: logo2 },
    { text: "Russia", dec: "shopname.ru", image: logo3 },
    { text: "Italy", dec: "shopname.it", image: logo4 },
    { text: "Denmark", dec: "denmark.com.dk", image: logo5 },
    { text: "France", dec: "shopname.com.fr", image: logo6 },
    { text: "Arabic Emirates", dec: "shopname.ae", image: logo7 },
    { text: "China", dec: "shopname.ae", image: logo8 },
    { text: "Great Britain", dec: "shopname.co.uk", image: logo9 }
]
function Index() {
    return (
        <Content>
            <Container>
                <TITLE title={"Suppliers by region"} />
                <DivFlexWrapper >
                    {regionData.map((item) => (
                        <DIVFLEXRight >
                            <Image
                                width={"35"}
                                height={"28"}
                                marginRights={".5"}
                                src={item.image} />
                            <FLEXCOULOM>
                                <Pargraph line={1}>
                                    {item.text}
                                </Pargraph>
                                <Pargraph line={1}>
                                    {item.dec}
                                </Pargraph>
                            </FLEXCOULOM>
                        </DIVFLEXRight>
                    ))}

                </DivFlexWrapper>
            </Container>
        </Content>
    )
}

export default Index
