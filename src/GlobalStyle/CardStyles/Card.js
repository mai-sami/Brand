import styled from "styled-components";

export const DivCardWrapper = styled.div`
  display: ${({ display }) => display};
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-column-gap:${({ column }) => column}rem
   `