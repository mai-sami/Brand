import React from 'react'
import TITLE from '../../Components/TitleComponent'
import { DIVFLexLeft, DIVFLEXSecand } from '../../GlobalStyle/Global'
import { DivSubecribe, Image, Pargraph, SubScribeDiv } from '../../GlobalStyle/Home/SubscribeStyle'
import { Buttons } from '../AuthComponents/Buttons'
import massge from '../../Assets/massge.png'
function Index() {
    return (
        <SubScribeDiv margin={2.3}>
            <TITLE title={"Subscribe on our newsletter"} />
            <Pargraph  width ={"auto"}line={3}>
                Get daily news on upcoming offers from many suppliers all over the world
            </Pargraph>
            <DIVFLEXSecand>
                <DivSubecribe marginRight={".5"}>
                    <DIVFLexLeft>
                        <Image marginRights={".4"} src={massge} alt="massge" />
                        <Pargraph>
                            Email
                        </Pargraph>
                    </DIVFLexLeft>
                </DivSubecribe>
                <Buttons
                    marginTop={"0"}
                    width={"auto"}
                    color={"#FFFF"}
                    name={"Subscribe"}
                />
            </DIVFLEXSecand>
        </SubScribeDiv>
    )
}

export default Index
