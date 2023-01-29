import styled from "styled-components";

export const BoxCards = styled.div`
background: #FFFFFF;
border: 1px solid #E0E0E0;
border-radius: 6px;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
margin:${({ margin }) => margin};
width: 250px;
min-height: 270px;
`
export const ServiceCards = styled.div`
background: #FFFFFF;
border: 1px solid #E0E0E0;
border-radius: 6px;
display: flex;
flex-direction: column;
margin:${({ margin }) => margin};
width: 330px;
min-height: 230px;
position: relative;
`
export const CircelsDiv = styled.div`
border-radius: 50%;
background: #D1E7FF;
 border: 2px solid #FFFFFF;
 width: 50px;
height: 50px;
position: absolute;
top: 50%;
right: 1.5rem;
display: flex;
align-items: center;
justify-content: center;
`