import styled from "styled-components";

export const Anckor=styled.a`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
text-align: center;
margin:  0 25px 0 25px;
 color: #606060;
 text-decoration: none;
`
export const FlexBETWEEN=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width:${({ width }) => width};

`
export const FlexBoxSelect=styled(FlexBETWEEN)`
border-color: solid #E0E0E0;
background: ${({ background }) => background || "#FFFFFF"};
border-radius: 6px;
border: ${({border})=>border||"1px solid #E0E0E0"};
  `
export const BoxPayment=styled.div`
background: #FFFFFF;
border: 1px solid #EEEEEE;
border-radius: 4px;
width:38px;
height:25px;
display: flex;
align-items: center;
justify-content: center;
margin:.3rem;
`