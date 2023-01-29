import React from 'react'
import { FLEXCOULOM, Forms, INPUT, Option, Select } from '../../GlobalStyle/AuthStyle'
import { DIVFLEX, Spans } from '../../GlobalStyle/Global'
import Dropdown from '../../GlobalStyle/Home/Dropdown'
import { Div } from '../DealsOffers/style'
import { FlexBETWEEN } from '../Footer/style'
import TITLE from '../TitleComponent/index'
import { Buttons } from '../AuthComponents/Buttons'

function Requests() {
    return (
        <Div className='test'>
            <DIVFLEX alignItems={"none"}>
                <FLEXCOULOM>
                    <TITLE fontSize={"35px"} fontWeight={"bolder"} color={"#ffff"}
                        title={"An easy way to send "} />
                    <TITLE fontSize={"35px"} fontWeight={"bolder"} color={"#ffff"}
                        title={"requests to all suppliers"} />
                    <Spans fontSize={"17px"} marginTop={"1rem"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        <br></br>
                        elit, sed do eiusmod tempor incididunt.
                    </Spans>
                </FLEXCOULOM>
                <Forms margin={"0"} width={"33%"}>
                    <TITLE title={"Send quote to suppliers"} />

                    <FLEXCOULOM>

                        <INPUT placeholder='What item you need?' />
                        <INPUT placeholder='Type more details' />
                        <br></br>
                        <FlexBETWEEN>
                            <INPUT margin={"1rem"} marginTop={"0"} placeholder='Quantity' />
                            <Dropdown borderAll={"1px"}
                                width={"140px"}
                                text={"Pcs"}
                            />
                        </FlexBETWEEN>
                        <br></br>
                        <Buttons
                            marginTop={"0"}
                            width={"150px"}
                            color={"#FFFF"}
                            name={"Send inquiry"}
                        />
                    </FLEXCOULOM>
                </Forms>

            </DIVFLEX>
        </Div>
    )
}

export default Requests
