import React from 'react'
import BodyItemFilter from '../Components/BodyItemFilters/BodyItemFilter'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'
import Sidebar from '../Components/SideBar/Sidebar'
import { Container } from '../GlobalStyle/LayoutStyle'
import { DIVFLEX } from '../GlobalStyle/Global'

function Filter() {
    return (
        <Container>
            <Breadcrumb />
            <DIVFLEX alignItems={"none"}>
            <Sidebar />
            <BodyItemFilter />
            </DIVFLEX>
        </Container>
    )
}

export default Filter
