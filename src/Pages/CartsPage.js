import React from 'react'
import Carts from '../Components/MYCart/Carts'
import SideCekout from '../Components/MYCart/SideCekout'
import Related from '../Components/RelatedBroducts/Related'
import { ContainerResponsivr } from '../GlobalStyle/Global'
import { Container } from '../GlobalStyle/LayoutStyle'

function CartsPage() {
    return (
        <Container>
             <ContainerResponsivr alignItems={"none"}>
            <Carts />
            <SideCekout />
            </ContainerResponsivr>
            <Related />

     </Container>
    )
}

export default CartsPage
