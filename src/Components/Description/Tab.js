import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FLEXCOULOM, HR, Labels } from '../../GlobalStyle/AuthStyle'
import { DIVFLEX, FLEX } from '../../GlobalStyle/Global'
import { Image, Pargraph } from '../../GlobalStyle/Home/SubscribeStyle'
import { Content } from '../../GlobalStyle/LayoutStyle'
import check from '../../Assets/Icon/check.png'
function Tab() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <
            >
            <Content
                BoderRaduis={"6px"}
                border={"1px solid #dddedf"}
                background={"#FFFF"}
            >
                <Labels
                    fontSize={"20px"}
                    onClick={() => toggleTab(1)}
                    padding={"1rem"}
             border={toggleState === 1 ? "2px solid #0D6EFD":""}
                    color={toggleState === 1 ? "#0D6EFD" : "#8B96A5"}
                    margin={"1rem"} >Description
                    </Labels>
                 <Labels
                    fontSize={"20px"}
                    onClick={() => toggleTab(2)}
                    padding={"1rem"}
                    border={toggleState === 2 ? "2px solid #0D6EFD":""}
                    color={toggleState === 2 ? "#0D6EFD" : "#8B96A5"}
                    margin={"1rem"} >Reviews</Labels>
                <Labels
                    fontSize={"20px"}
                    onClick={() => toggleTab(3)}
                    padding={"1rem"}
                    border={toggleState === 3 ? "2px solid #0D6EFD":""}
                    color={toggleState === 3 ? "#0D6EFD" : "#8B96A5"}
                    margin={"1rem"} >Shipping</Labels>
                <Labels
                    fontSize={"20px"}
                    onClick={() => toggleTab(4)}
                    padding={"1rem"}
                    border={toggleState === 4 ? "2px solid #0D6EFD":""}
                    color={toggleState === 4 ? "#0D6EFD" : "#8B96A5"}
                    margin={"1rem"} >About company</Labels>
            </Content>
            {toggleState === 1 ?
                <Pargraph
                    fontSize={"16"}
                    width={"auto"}
                    marginTop={".8rem"}
                    padding={"1"}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    <br></br>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                </Pargraph>
                : ""}
            {toggleState === 2 ?
                <Pargraph
                    width={"auto"}
                    marginTop={".8rem"}
                    padding={"1"}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                    praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                    vel voluptatum

                </Pargraph>
                : ""}
            {toggleState === 3 ?
                <Pargraph
                    width={"auto"}
                    marginTop={".8rem"}
                    padding={"1"}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                    praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                    vel voluptatum

                </Pargraph>
                : ""}
            {toggleState === 4 ?
                <Pargraph
                    width={"auto"}
                    marginTop={".8rem"}
                    padding={"1"}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                    praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                    vel voluptatum

                </Pargraph>
                : ""}
           

        </>

    )
}


export default Tab
