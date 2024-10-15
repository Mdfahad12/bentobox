import styled from "styled-components";

export const BentoLayoutWrp = styled.div`
  height: 80vh;
  display: flex;
  gap: 1rem; 
  flex-wrap: wrap;

  .expandedColumn {
    flex: 2;
    position: relative;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem; 
       @media (max-width: 61.25rem) {
      gap: 0; 
    }
  }

  .expandedTop {
    height: 80%; 
    overflow: hidden;
    position: relative;
  }

  .expandedBottom {
    height: 20%;
    overflow: hidden;
    position: relative;
  }

  @media (max-width: 61.25rem) {
    flex-direction: column; 
    gap:0;

  }
`;

export const BentoLayoutColumn = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  gap: 1rem; 
  transition: flex 300ms ease-in, height 300ms ease-in;
  @media (max-width: 61.25rem) {

    gap:0;

  }

`;

export const BentoLayoutBox = styled.div`
  cursor: pointer;
  background-color: white;
  height: 50%; 
  transition: width 300ms ease-in, height 300ms ease-in;
  border: 0.2rem solid #ccc; 
  border-radius: 0.4rem;



`;
