import styled from "styled-components";

 export const SubFooterContent = styled.div`
  background: ${({ background }) => background || "#E3E8EE"};
 align-items: center;
justify-content: center;
padding: ${({padding})=>padding||"1rem"};
position: ${({position})=>position};
bottom: ${({bottom})=>bottom};
width: ${({width})=>width};
height: ${({height})=>height};
justify-content: ${({ justifyContent }) =>justifyContent};
align-items: ${({ alignItems }) =>alignItems};
display: ${({ display }) =>display};

`
export const Content = styled.div`
background: ${({ background }) => background || "#EFF2F4"};
align-items: center;
align-items:${({alignItems})=>alignItems||"center"};

justify-content: center;
padding: ${({ padding }) => padding || "1rem"};
border-radius:${({BoderRaduis})=>BoderRaduis||"0"};
margin-top:${({marginTop})=>marginTop};
width: ${({width})=>width};
flex-wrap: ${({flexWrap})=>flexWrap};
display: ${({display})=>display};
margin:${({margin})=>margin};

border: ${({border})=>border};


`
export const Container = styled.div`
width: 90%;
margin: auto;
align-items: center;
justify-content: center;
`
export const BoxColor = styled.div`
width: 230px;
min-height: 90px;
background: ${({ background }) => background || "#FFFFF"};
border-radius: 6px;
margin: .6rem;
position: relative;
padding: ${({ padding }) => padding || ".6rem"};


`
export const RelativeDiv =styled.div`
position: relative;
`
export const AbsoulteDiv =styled.div`
position: absolute;
left: 6%;
top: 17%;
`
export const Ul =styled.ul`
`

export const Li =styled.li`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
list-style: none;
color: #505050;
line-height: 2.5;

`
