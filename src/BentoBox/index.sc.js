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
       @media only screen and (min-width: 40.0625em) and (max-width: 64em) {
        gap: 0; 
       
    }
          @media only screen and (max-width: 40em){
    flex-direction:column;
    gap:0;
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

  @media only screen and (min-width: 40.0625em) and (max-width: 64em) {
  flex-direction:column;
    gap:0;

  }
    @media only screen and (max-width: 40em){
    flex-direction:column;
    gap:0;
    }

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
  @media only screen and (min-width: 40.0625em) and (max-width: 64em) {

    gap:0;

  }
      @media only screen and (max-width: 40em){
    flex-direction:column;
    gap:0;
    }

`;

export const BentoLayoutBox = styled.div`
  cursor: pointer;
  background-color:#e5e5e5;
  height: 50%; 
  transition:  height 300ms ease-in;
  margin: 0 0 0.75rem;




`;
