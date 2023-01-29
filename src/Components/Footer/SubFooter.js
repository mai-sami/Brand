import React from 'react'
import { DIVFLEX } from '../../GlobalStyle/Global'
import { Container, SubFooterContent } from '../../GlobalStyle/LayoutStyle'
import { Anckor, FlexBETWEEN } from './style'
import Payment from './Payment'

 
function SubFooter() {
    return (
        <SubFooterContent 
     

    >
            <Container>
                <FlexBETWEEN   >
                    <DIVFLEX>
                    <Payment />
                    </DIVFLEX>
                    <DIVFLEX>
                        <Anckor href='/'>Support</Anckor>
                        <Anckor href='/'>PrivAnckorcy & Cookies</Anckor>
                        <Anckor href='/'>Accessibility</Anckor>
                    </DIVFLEX>
                </FlexBETWEEN>
            </Container>
        </SubFooterContent>
    )
}

export default SubFooter
// position={"absolute"}
// bottom={"0"}
// width={"100%"}
// padding={"0"}
// height={"66px"}
// justifyContent={"center"}
// alignItems={"center"}
// display={"flex"}