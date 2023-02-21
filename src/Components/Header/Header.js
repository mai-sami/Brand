import React from 'react'
import { AnckorTest, DIVFLEX, FLEX } from '../../GlobalStyle/Global'
import { Container, Content } from '../../GlobalStyle/LayoutStyle'
import Logo from '../Logo'
import Search from '../SearchComponent'
import Cart from '../../Assets/Icon/Icon Colors.png'
import Like from '../../Assets/Icon/Icon ColorLike.png'
import profile from '../../Assets/Icon/person.png'
import Massge from '../../Assets/Icon/Icon Color.png'
import IconHeader from '../IconHeader'
import { useContext } from 'react'
import { themeContext } from '../../Context/themeContext'
import { DarkTheem, theem } from '../../GlobalStyle/Theem'


function Header() {
    const [theme, setTheem] = useContext(themeContext);
    localStorage.setItem('theem', JSON.stringify(theme))
    return (
        <Content background={"#FFFFFF"} padding={".6rem"}>
            <Container>
                <DIVFLEX>
                    <Logo />
                    <Search />
                    <FLEX>
                        <AnckorTest href={"/filter"}>
                            <IconHeader margin={"1"} icon={profile} name={"Profile"} />
                        </AnckorTest>
                        <AnckorTest href={"/"}>
                            <IconHeader margin={"1"} icon={Massge} name={"Message"} />
                        </AnckorTest>
                        <AnckorTest href={"/detils"}>
                            <IconHeader margin={"1"} icon={Like} name={"Orders"} />
                        </AnckorTest>
                        <AnckorTest href={"/carts"}>
                            <IconHeader margin={"1"} icon={Cart} name={"My cart"} />
                        </AnckorTest>
                        <button style={{ width: "auto", height: "40px", padding: ".3rem" }} onClick={() => setTheem((prevState) => (prevState.name === 'light' ? DarkTheem : theem))}>
                            {theme.name === 'light' ? 'someColor' : 'light'}
                        </button>

                    </FLEX>
                </DIVFLEX>

            </Container>
        </Content>
    )
}

export default Header
