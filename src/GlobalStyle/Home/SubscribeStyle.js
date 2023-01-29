import styled from "styled-components";
export const DivSubecribe = styled.div`
background: #FFFFFF;
border: 1px solid #E3E8EE;
border-radius:3px;
position: relative;
   padding:.5rem;
   min-width:250px;
   text-align: left;
   margin-right:${({ marginRight }) => marginRight || "0"}rem

`
export const SubScribeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin:${({ margin }) => margin}rem;

`

export const Pargraph = styled.p`
color:${({ color }) => color || "#606060"};
font-size:${({ fontSize }) => fontSize || "16"}px;
 font-weight:${({ fontWeight }) => fontWeight || "600"};
margin:0;
padding: ${({ padding }) => padding || "0"}rem;
 line-height: ${({ line }) => line || "1.5"};
width: ${({ width }) => width || "160px"};
cursor: ${({ cursor }) => cursor };
border: ${({ border }) => border };
background: ${({ background }) => background };
text-align: ${({ textAlign }) => textAlign };
`
export const Image = styled.img`
margin-right:${({ marginRights }) => marginRights}rem;
width:${({ width }) => width}px;
height:${({ height }) => height}px;
margin-left:${({ marginLeft }) => marginLeft}rem;
margin-top:${({ marginTop }) => marginTop}rem;
border: ${({border})=>border};
padding: ${({padding})=>padding};
margin: ${({margin})=>margin};
position: ${({position})=>position};
top: ${({top})=>top};
right: ${({right})=>right};
bottom: ${({bottom})=>bottom};

 `