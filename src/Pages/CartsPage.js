import React from 'react'
import Carts from '../Components/MYCart/Carts'
import SideCekout from '../Components/MYCart/SideCekout'
import { DIVFLEX } from '../GlobalStyle/Global'
import { Container } from '../GlobalStyle/LayoutStyle'

function CartsPage() {
    return (
        <Container>
             <DIVFLEX alignItems={"none"}>
            <Carts />
            <SideCekout />
            </DIVFLEX>
     </Container>
    )
}

export default CartsPage
