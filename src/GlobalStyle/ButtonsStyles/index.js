import styled from "styled-components";

export const ButoonLogin = styled.button`
 border-radius:${({ borderRuidus }) => borderRuidus || "6"}px;
width: ${({ width }) => width || "100%"};
margin-top: ${({ marginTop }) => marginTop || ".6"}rem;
padding: ${({ padding }) => padding || ".6"}rem;
font-size: ${({ fontSize }) => fontSize || "16"}px;
color:${({ color }) => color};
background: ${({ background }) => background || "#0D6EFD"};
border: none;
border:${({ border }) => border};
margin:${({ margin }) => margin};

`
export const ContinueBUTTON = styled.button`
 border-radius: 6px;
 outline: none;
 border: none;
 background-color: transparent;
 width: 100%;
 color:${({ color }) => color};
 font-size: ${({ fontSize }) => fontSize || "15"}px;
 font-weight: 500;

 `
export const DivButton = styled.div`
display: flex;
align-items: center;
background:${({ background }) => background};
border: 1px solid #E0E0E0;
box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
border-radius: 6px;
padding:.6rem;
text-align: center;
margin-top: .6rem ;

`