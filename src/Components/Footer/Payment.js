import React from 'react'
import logo from '../../Assets/Logo.png'
import LogoCircels from '../../Assets/LogoCircels.png'
import LogoPayPal from '../../Assets/LogoPayPal.png'
import LogoTest from '../../Assets/LogoTest.png'
import { DIVFLEX } from '../../GlobalStyle/Global'
import { BoxPayment } from './style'
var DataImage = [
    { image: logo },
    { image: LogoCircels },
    { image: LogoPayPal },
    { image: LogoTest }
]
function Payment({justifyContent,marginTop,margin}) {
    return (
        <>
            <DIVFLEX margin={margin} marginTop ={marginTop}justifyContent={justifyContent}>
                {DataImage.map((item) => (
                    <BoxPayment >
                        <img src={item.image} alt={item.image} />
                    </BoxPayment>
                ))}
            </DIVFLEX>
        </>
    )
}

export default Payment
