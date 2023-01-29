import React from 'react'
import { Container } from '../../GlobalStyle/LayoutStyle'
import DealsOffer from '../DealsOffers/DealsOffer'
import ConsumerEectronics from '../DealsOffers/HomeOutdoor/ConsumerEectronics'
import HomeOutdoors from '../DealsOffers/HomeOutdoor/HomeOutdoors'
import Copyright from '../Footer/Copyright'
import Introduaction from '../Introduaction'
import OurServices from '../OurServices'
import Recommend from '../Recommended/Recommend'
import Requests from '../RequestsForm/Requests'
import Region from '../Region'
 
function Index() {
    return (
        <>
            <Container>
                <Introduaction />
                <DealsOffer />
                <HomeOutdoors />
                <ConsumerEectronics />
                <Requests />
            </Container>
            <Recommend />
            <OurServices />
            <Region />
         </>
    )
}

export default Index
