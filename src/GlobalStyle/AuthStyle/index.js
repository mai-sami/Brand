import styled from "styled-components";

export const Forms = styled.form`
background: #FFFFFF;
box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
border-radius: 6px;
 padding:2rem;
 overflow: auto;
margin:${({ margin }) => margin || "5rem auto auto auto"};
width:${({ width }) => width || "100%"};

@media (min-width:800px) and (max-width:1199px) {
    width:60%
  }
  @media (min-width:350px) and (max-width:809px) {
    width:90%
  }
  `
export const Labels = styled.label`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
   color:${({ color }) => color||"#1C1C1C"};
  margin-right:${({ margin }) => margin};
  font-size:${({ fontSize }) => fontSize||"16px"};
  border-bottom:${({ border }) => border};
  padding:${({ padding }) => padding};
  margin:${({ margins }) => margins};

`
export const INPUT = styled.input`
background: #FFFFFF;
border-style: solid;
border-width: ${({borders})=>borders||"2px"};
border-color:${({border})=>border||"#bababaa0"} ;
 border-radius:${({ borderRadius }) => borderRadius || "6px"};
 padding:${({ padding }) => padding || "1rem"};
 margin-top:${({ marginTop }) => marginTop || ".6rem"};
  width:${({ width }) => width||"100%"};
 outline: none;
margin-right:${({ margin }) => margin};
 
 
`
export const INPUTSearch = styled(INPUT)`
border-right: 1px solid #0D6EFD !important;
  border: none;
`
export const INPUTBorder = styled(INPUT)`
border: none;
padding: 0;
height: 40px;
margin-left: 0.8rem;

`
export const INPUTEys = styled(INPUT)`
 position: relative;

 `
export const FLEXCOULOM = styled.div`
display: flex;
flex-direction: column;
margin:${({ margin }) => margin||"1rem 0 1rem"};
align-items: ${({ alignItems }) => alignItems};
padding: ${({ padding }) => padding};
border-top: ${({ border }) => border};
width: ${({ width }) => width};
justify-content: ${({ justifyContent }) =>justifyContent};
@media  (max-width:1199px) {
  width:80%;
}
`
export const FLEXCOULOMCard = styled(FLEXCOULOM)`
@media  (max-width:1199px) {
  width:90%;
}
`
export const FLEXCOULOMFooter = styled(FLEXCOULOM)`
@media  (max-width:1199px) {
  display:none;
}
`

export const Divider = styled.div`
display: flex;
align-items: center;
margin: 1rem 0 1rem 0;
`
export const HR = styled.hr`
width: 100%;
border: .1px solid #bababaa0;
`
export const Paragrph = styled.p`
margin: 0 22px 0 22px;
  font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #BABABA;
`

// Register style

export const Select = styled.select`
background: ${({ background }) => background || "#FFFFFF"};
border-color:#E0E0E0 !important;
border-right: ${({ borderRight }) => borderRight || " "} !important;
border-style:solid;
padding:.6rem;
 border:  ${({ borderAll }) => borderAll || "none"} ;
outline: none;
height: 44px;
width: ${({ width }) => width};
 

`
export const Option = styled.option`
   color: #1C1C1C;
 font-size: 15px;

`