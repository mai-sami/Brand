import styled from "styled-components";

export const DIVFLEX = styled.div`
display: ${({display})=>display||"flex"};
 align-items: ${({ alignItems }) =>alignItems|| "center"};
 width:${({ width }) => width};
 justify-content: ${({ justifyContent }) =>justifyContent|| "space-between"};
background: ${({ background }) => background};
margin-top: ${({ marginTop }) => marginTop};
margin: ${({ margin }) => margin};
padding-top:${({ padding }) => padding};
padding:${({ paddingAll }) => paddingAll}

`
export const DIVFLEXBrder = styled(DIVFLEX)`
border: 2px solid #E3E8EE !important;
flex-wrap: wrap;

`
export const FLEX = styled.div`
display: flex;
align-items: center;
padding:${({ padding }) => padding};
 border-top : ${({border})=>border||"none"};
 border : ${({borderall})=>borderall||"none"};
 justify-content: ${({ justifyContent }) =>justifyContent};
 width:${({ width }) => width};

 margin-left:${({ marginLeft }) => marginLeft}rem;

`
export const DIVFLEXRight = styled.div`
display: flex;
align-items: center;
margin-right:${({ marginRight }) => marginRight}rem;
margin:${({ margin }) => margin}rem;

   `
export const DivFlexWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  grid-column-gap:${({ column }) => column}rem
   `
export const DIVFLEXSecand = styled(DIVFLEX)`
justify-content: center;
margin:${({ margin }) => margin}rem;

 `
export const DIVFLexLeft = styled(DIVFLEX)`
justify-content: left;
 `
export const DIVFLexRight = styled(FLEX)`
 flex-direction: column;
justify-content: center;
align-items: center;
width:${({ width }) => width};

margin:${({ margin }) => margin}rem;
`
export const DIVFLCuloms = styled(DIVFLEX)`
  flex-direction: column;
 align-items: flex-start
  `
export const TitleText = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: ${({ fontWeight }) => fontWeight || "600"};
font-size: ${({ fontSize }) => fontSize || "27px"};
margin: 0;
width:${({ width }) => width};
color:${({ color }) => color ||"1C1C1C"};
margin-top:${({ margin }) => margin}rem;
margin-bottom:${({ marginBottom }) => marginBottom}rem;


`
export const AnckorTest = styled.a`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
 text-align: center;
color:${({ color }) => color};
font-size:${({ fontSize }) => fontSize};
 text-decoration: none;
 margin-right:${({ marginRight }) => marginRight}rem;
 font-weight: ${({ fontWeight }) => fontWeight };

`
export const Span = styled.span`
 position: absolute;
top: 22%;
left:8%;
width:140px;
color: #FFFFFF;
`
export const Spans = styled.span`
color:${({ color }) => color||"#FFFFFF"};
margin-top: ${({ marginTop }) => marginTop || "0"};
font-size:${({ fontSize }) => fontSize||"14px"};
width:${({ width }) => width};

`
export const SidebarS =styled.div`
width:${({ width }) => width};

`
export const DivBox=styled.div`
 width:${({ width }) => width||"40px"};
 height:${({ height }) => height||"38px"};
 background: ${({ background }) => background||"#FFFFFF"};
border: 2px solid #E3E8EE;
display: flex;
justify-content: center;
align-items: center;
 justify-content: ${({ justifyContent }) =>justifyContent||"center"};
 padding:${({ padding }) => padding};
 margin-top: ${({ marginTop }) => marginTop || "0"};
 border-radius:${({ borderRadius }) => borderRadius};

 margin: ${({ margin }) => margin || "0"};

`