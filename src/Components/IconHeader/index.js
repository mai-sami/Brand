import React from 'react'
import { Labels } from '../../GlobalStyle/AuthStyle'
import { DIVFLexRight, FLEX } from '../../GlobalStyle/Global'
import { Image } from '../../GlobalStyle/Home/SubscribeStyle'

function Index({ name, icon, margin }) {
    return (
        <FLEX>
            <DIVFLexRight margin={margin}>
                <Image
                    width={"20"}
                    height={"20"}
                    src={icon} />
                <Labels>
                    {name}
                </Labels>
            </DIVFLexRight>
        </FLEX>
    )
}

export default Index
