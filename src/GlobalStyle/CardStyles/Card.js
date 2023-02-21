import styled from "styled-components";

export const DivCardWrapper = styled.div`
  display: ${({ display }) => display || "grid"};
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-column-gap:${({ column }) => column}rem
 
  @media (min-width:791px) and (max-width:1599px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr)!important;
  };
  @media (min-width:400px) and (max-width:790px) {
    display:grid;
    grid-template-columns: repeat(1, 1fr)!important;
  }
   
   `