import styled from "styled-components";
import Backgrounds from '../../Assets/image 92.png'

export const BoxCulom = styled.div`
background: #FFFFFF;
width:165px;
border-right: 1px solid #E3E8EE ;
border-left: 1px solid #E3E8EE ;
padding:1.5rem;
 
`

export const BoxCulomShear = styled.div`
min-width:242px;
height:213px;
 padding:1.5rem;
 background-image:url(${Backgrounds}); 
`
export const BoxCulomOutdoors = styled.div`
background: #FFFFFF;
height:${({ height }) => height || "80px"};
 width:${({ width }) => width || "165px"};
 border-left: 1px solid #E3E8EE ;
 border-bottom: 1px solid #E3E8EE ;

padding:1.5rem;


`
export const DivOffer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:45px ;
height:50px ;
background: #606060;
border-radius: 4px;
margin:.3rem;
 `
export const DivPrice = styled.div`
 width: 55px;
height: 22px;
color: #EB001B;
background: #FFE3E3;
border-radius: 29px;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 600;
 `

export const Div = styled.div`
 background-size: cover;
padding:2rem;
border-radius: 6px;
margin-top: 2rem;

 `