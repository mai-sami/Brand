import React, { useState } from 'react'
import { DIVFLEX, FLEX } from '../../GlobalStyle/Global'
import Dropdown from '../../GlobalStyle/Home/Dropdown'
import logo from '../../Assets/assetRegion/AE@2x.png'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { Container, Content } from '../../GlobalStyle/LayoutStyle'
import list from '../../Assets/Icon/list.png'
import './index.css'
const MobileMenu = () => {
    return (
        <div className={'mobile-menu'}>
            <Pargraph width={"120px"}>  All category </Pargraph>
            <Pargraph width={"120px"}>  Hot offers </Pargraph>
            <Pargraph width={"120px"}>  Gift boxes </Pargraph>
            <Pargraph width={"120px"}>  Projects  </Pargraph>
            <Pargraph width={"120px"}>  Menu item </Pargraph>
            <Dropdown
                background={"transparent"}
                border={"none"}
                text={"Help"}
                borderRight={"none"} />
        </div>
    );
};
function SubHeader() {
    const [isShown, setIsShown] = useState(false);
    const toggleMobileMenu = () => {
        setIsShown(!isShown);
    };
    return (
        <Content
            padding={".6rem"}
            background={"#FFFFFF"} >
            <Container>
                <DIVFLEX>
                    {isShown && <MobileMenu />}
                    {isShown && (
                        <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
                            &times;
                        </button>
                    )}
                    <FLEX>
                        <Image
                            marginRights={".4"}
                            onClick={toggleMobileMenu}
                            src={list}
                            className='show-mobile-menu-button' />
                        <Pargraph width={"120px"}>  All category </Pargraph>
                        <div className='menu'>
                            <Pargraph width={"120px"}>  Hot offers </Pargraph>
                            <Pargraph width={"120px"}>  Gift boxes </Pargraph>
                            <Pargraph width={"120px"}>  Projects  </Pargraph>
                            <Pargraph width={"120px"}>  Menu item </Pargraph>
                            <Dropdown
                                background={"transparent"}
                                border={"none"}
                                text={"Help"}
                                borderRight={"none"} />
                        </div>
                    </FLEX>
                    <FLEX>
                        <Dropdown background={"transparent"} border={"none"} text={"English, USD"} />
                        <DIVFLEX>
                            <Image
                                marginRights={"0"}
                                src={logo} />
                            <Dropdown background={"transparent"} border={"none"} text={"Ship to"} />
                        </DIVFLEX>
                    </FLEX>
                </DIVFLEX>
            </Container>
        </Content>
    )
}

export default SubHeader
