import React from 'react'
import { FLEXCOULOM } from '../../GlobalStyle/AuthStyle'
import { DIVFLEX, Spans } from '../../GlobalStyle/Global'
import { Buttons } from '../AuthComponents/Buttons'
import { Div } from '../DealsOffers/style'
import TITLE from '../TitleComponent/index'

function SuperDiscount() {
    return (
        <>
            <Div className='test'>
                <DIVFLEX width={"100%"}>
                    <FLEXCOULOM>
                        <TITLE fontSize={"30px"} fontWeight={"bolder"} color={"#ffff"}
                            title={"Super discount on more than 100 USD "} />

                        <Spans fontSize={"17px"} marginTop={"1rem"}>
                            Have you ever finally just write dummy info

                        </Spans>
                    </FLEXCOULOM>
                    <Buttons
                        marginTop={"0"}
                        width={"150px"}
                        color={"#FFFF"}
                        name={"Shop now"}
                        background={"#FF9017"}
                    />
                </DIVFLEX>
            </Div>
        </>
    )
}

export default SuperDiscount
