import React, { useEffect, useState } from 'react'
import { FLEXCOULOM, HR, INPUT, Labels } from '../../GlobalStyle/AuthStyle'
import { ButoonLogin } from '../../GlobalStyle/ButtonsStyles'
import { AnckorTest, DIVFLEX, FLEX, SidebarS } from '../../GlobalStyle/Global'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { Anckor, FlexBETWEEN } from '../Footer/style'
import Up from '../../Assets/Icon/up.png'
import down from '../../Assets/Icon/down.png'
import { FilterComponent, FilterCondition, FilterFeatuer } from './FilterComponent'
import { RememberCheckbox } from '../AuthComponents/RememberCheckbox'
import reate from '../../Assets/Icon/rating.png'
import reate2 from '../../Assets/Icon/ratingx.png'
import reate3 from '../../Assets/Icon/rating3.png'
import reate4 from '../../Assets/Icon/rating4.png'
import { Buttons } from '../AuthComponents/Buttons'

const Rating = [
    { Image: reate },
    { Image: reate4 },
    { Image: reate3 },
    { Image: reate2 },


]

function Sidebar() {
    const [show, setShow] = useState(true)
    const [listShow, setList] = useState(true)
    const [listFilter, setlistFilter] = useState(true)
    const [featuer, setFeatuer] = useState(false)
    const [radios, setReadio] = useState(false)
    const [price, setPrice] = useState(false)
    const [prices, setPrices] = useState(40);

    const [rate, setReate] = useState(false)
    const ChangeShow = () => {
        setShow(!show)
    }
    const handleInput = (e) => {
        setPrices(e.target.value);
    }
    const ChangeList = () => {
        setList(!listShow)
    }
    const ChangeListFilter = () => {
        setlistFilter(!listFilter)
    }
    const FeatuerFilter = () => {
        setFeatuer(!featuer)
    }
    const ChandeRaiodo = () => {
        setReadio(!radios)
    }
    const ChandePrice = () => {
        setPrice(!price)
    }
    const ChandeReating = () => {
        setReate(!rate)
    }
    return (
        <SidebarS width={"12%"}>
            <FLEXCOULOM  >
                <FLEX onClick={ChangeList} border={"1px solid #8b96a54a"}>
                    <Pargraph cursor={"pointer"} line={"3"} color={"#1C1C1C"} width={"120px"}>  Category </Pargraph>
                    {listShow ?
                        <Image
                            marginRights={".4"}
                            src={Up} />
                        : <Image
                            marginRights={".4"}
                            src={down} />
                    }
                </FLEX>
                {listShow ?
                    <>
                        <Pargraph cursor={"pointer"} line={"2.2"} color={"#8B96A5"} width={"100%"}>  Mobile accessory </Pargraph>
                        <Pargraph cursor={"pointer"} line={"2.2"} color={"#8B96A5"} >  Electronics </Pargraph>
                        <Pargraph cursor={"pointer"} line={"2.2"} color={"#8B96A5"} >  Find store </Pargraph>
                        <Pargraph cursor={"pointer"} line={"2.2"} color={"#8B96A5"} >  Smartphones  </Pargraph>
                        <Pargraph cursor={"pointer"} line={"2.2"} color={"#8B96A5"} >  Modern tech  </Pargraph>
                        {show ? "" :
                            <>
                                <Pargraph cursor={"pointer"} line={"2.2"} color={"#8B96A5"} >  Smartphones  </Pargraph>
                                <Pargraph cursor={"pointer"} line={"2"} color={"#8B96A5"} >  Modern tech  </Pargraph>
                            </>
                        }
                        <Pargraph>
                            <ButoonLogin
                                onClick={ChangeShow}
                                background={"transparent"}
                                fontSize={"16"}
                                color={"#0D6EFD"}
                                width={"auto"}
                                marginTop={".8rem"}
                                padding={"0"}
                            >See all</ButoonLogin>
                        </Pargraph>
                    </>
                    : ""}
            </FLEXCOULOM>
            <FLEX border={"1px solid #8b96a54a"} onClick={ChangeListFilter}>
                <br></br>
                <br></br>

                <Pargraph cursor={"pointer"} width={"120px"}> Brands </Pargraph>
                {listFilter ?
                    <Image
                        marginRights={".4"}
                        src={Up} />
                    : <Image
                        marginRights={".4"}
                        src={down} />
                }
            </FLEX>
            {listFilter ?
                <FLEXCOULOM>
                    <FilterComponent />
                </FLEXCOULOM>
                : ""
            }

            <FLEX border={"1px solid #8b96a54a"} onClick={FeatuerFilter}>
                <br></br>
                <br></br>

                <Pargraph cursor={"pointer"} width={"120px"}> Features </Pargraph>
                {featuer ?
                    <Image
                        marginRights={".4"}
                        src={Up} />
                    : <Image
                        marginRights={".4"}
                        src={down} />
                }
            </FLEX>
            {featuer ?
                <FLEXCOULOM>
                    <FilterFeatuer />
                </FLEXCOULOM>
                : ""
            }

            <FLEX border={"1px solid #8b96a54a"} onClick={ChandeRaiodo}>
                <br></br>
                <br></br>

                <Pargraph cursor={"pointer"} width={"120px"}> Condition </Pargraph>
                {radios ?
                    <Image
                        marginRights={".4"}
                        src={Up} />
                    : <Image
                        marginRights={".4"}
                        src={down} />
                }
            </FLEX>
            {radios ?
                <FLEXCOULOM>
                    <FilterCondition />
                </FLEXCOULOM>
                : ""
            }
            <FLEX border={"1px solid #8b96a54a"} onClick={ChandePrice}>
                <br></br>
                <br></br>

                <Pargraph cursor={"pointer"} width={"120px"}> Price range </Pargraph>
                {price ?
                    <Image
                        marginRights={".4"}
                        src={Up} />
                    : <Image
                        marginRights={".4"}
                        src={down} />
                }
            </FLEX>
            {price ?
                <FLEXCOULOM margin={"0"}>
                    <FLEXCOULOM margin={"0"}>
                        <INPUT width={"130px"} type="range" margin={"0"} marginTop={"0"} onInput={handleInput} />
                    </FLEXCOULOM>
                    <DIVFLEX  >

                        <FLEXCOULOM margin={"0"}>
                            <Labels>Min</Labels>
                            <INPUT width={"40px"} onInput={handleInput} placeholder='0' value={prices} />
                        </FLEXCOULOM>
                        <FLEXCOULOM margin={"0"}>
                            <Labels>Max </Labels>
                            <INPUT width={"40px"} onInput={handleInput} placeholder='0' value={prices} />
                        </FLEXCOULOM>
                    </DIVFLEX>
                    <Buttons
                        name={"Apply"}
                        color={"#0D6EFD"}
                        background={"#FFFFFF"}
                    />
                    <br></br>
                </FLEXCOULOM>
                : ""
            }
            <FLEX border={"1px solid #8b96a54a"} onClick={ChandeReating}>
                <br></br>
                <br></br>

                <Pargraph cursor={"pointer"} width={"120px"}> Ratings </Pargraph>
                {rate ?
                    <Image
                        marginRights={".4"}
                        src={Up} />
                    : <Image
                        marginRights={".4"}
                        src={down} />
                }
            </FLEX>
            {rate ?
                <FLEXCOULOM>
                    {Rating.map((item) => (
                        <RememberCheckbox margin={.5}>
                            <Image
                                marginRights={".4"}
                                src={item.Image} />
                        </RememberCheckbox>
                    ))}
                </FLEXCOULOM>
                : ""
            }


        </SidebarS>
    )
}

export default Sidebar
