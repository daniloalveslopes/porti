import styled from "styled-components";
import color from "./variaveis"
const SectionSkillsStyled = styled.section`
height: 80vh;
color: ${color.cor1};

@media (max-width: 497px){
    padding: 0px;
    margin-bottom: 100px;
    .content-skills{
        padding:0 ;
    }
}
`
export default SectionSkillsStyled
