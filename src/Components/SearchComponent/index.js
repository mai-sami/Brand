import React from 'react'
import { INPUT, INPUTSearch } from '../../GlobalStyle/AuthStyle'
import { DIVFLEXRight } from '../../GlobalStyle/Global'
import Dropdown from '../../GlobalStyle/Home/Dropdown'
import { Buttons } from '../AuthComponents/Buttons'
import { SearchDiv } from './style'

function Index() {
    return (
        <DIVFLEXRight>
            <SearchDiv>
                <INPUTSearch
                    width={"450px"}
                    marginTop={"0rem"}
                    borderRadius={"none"}
                    padding={".8rem"}
                    placeholder='Search here' />
                <Dropdown
                    width={"150px"}
                    border={"none"} background={"transparent"} text={"All Category"} />
                <Buttons
                    marginTop={"0"}
                    width={"120px"}
                    color={"#FFFF"}
                    name={"Search"}
                    padding={".8"}
                    borderRuidus={"none"}
                />
            </SearchDiv>
        </DIVFLEXRight>
    )
}

export default Index
