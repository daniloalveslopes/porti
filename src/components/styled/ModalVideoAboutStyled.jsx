import styled from "styled-components";
import color from "./variaveis"
const Modal = styled.div`

background-color: ${color.cor1};
.show{
    display: block;
}
iframe{
    width: 60vw;
    height: 60vh;
}
.cardModal{
    transform: translateY(100px) !important;
}

@media (max-height: 700px){
    

}

`
export default Modal