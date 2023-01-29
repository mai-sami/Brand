import React from 'react'
import { DIVFLEX } from '../../GlobalStyle/Global'
import Dropdown from '../../GlobalStyle/Home/Dropdown'
import { Container, SubFooterContent } from '../../GlobalStyle/LayoutStyle'
import { Anckor, FlexBETWEEN } from './style'
import logo from '../../Assets/assetRegion/AE@2x.png'
import { Image } from '../../GlobalStyle/Home/SubscribeStyle'
function Copyright() {
    return (
        <SubFooterContent>
        <Container>
            <FlexBETWEEN>
                <DIVFLEX>
                <Anckor href='/'>© 2023 Ecommerce. </Anckor>
                 </DIVFLEX>
                <DIVFLEX>
                 <Image
                 marginRights={".4"} 
                 src={logo} />
                 <Dropdown background={"transparent"} border={"none"} text={"English"} />
                 </DIVFLEX>
            </FlexBETWEEN>
        </Container>

    </SubFooterContent>
    )
}

export default Copyright
