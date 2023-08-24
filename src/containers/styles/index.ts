import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  height: 100%;
  box-sizing: border-box;
`;

export const Col5 = styled.div`
  height: 90vh;
  background: #37374a;
  grid-column: span 5;
  padding-top: 5rem;
`;

export const Col7 = styled.div`
  grid-column: span 7;
  padding-top: 5rem;
`;

export const FlexColContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
