import React from 'react'
 import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'
import { DescriptionAll } from '../Components/Description/RightDescription'
import DetailsIntro from '../Components/DetailsIntro/DetailsIntro'
import Related from '../Components/RelatedBroducts/Related'
import SuperDiscount from '../Components/SuperDiscount/SuperDiscount'
 import { Container } from '../GlobalStyle/LayoutStyle'

function Details() {
    return (
        <>
            <Container>
            <Breadcrumb />
           <DetailsIntro />
            <DescriptionAll />
            <Related />
          <SuperDiscount />
          
        </Container>
        </>
    )
}

export default Details
