import styled from "styled-components";
import color from "./variaveis";

const SectionMainStyled = styled.main`
   min-height: 100vh;
   max-width: 1000vh;
   color: ${color.cor1};

   .cardVideoSobre{
    background-color: ${color.cor1};
   }
   .dowloadBtn{
    background-color: ${color.cor1};
    
   }
   .modalArea{
      /* height: 100vh;
      width: 100vw; */
      z-index: 100;
     
     
   }
   @media (max-width: 497px){
    .txt{
      font-size:20px;
    }
    button{
      font-size: 15px;
      /* width: 300px; */
    }
}
   @media (max-height: 570px){
      .modalArea{
      div{
         
         transform:translateY(-20px) ; 
      }
   }
   }
`
export default SectionMainStyled