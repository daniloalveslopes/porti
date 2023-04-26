import styled from "styled-components";
import  color  from './variaveis'
const SectionContactsStyled = styled.section`
form{
    input{
        border: 2px solid ${color.cor1};
        font-size: 20px;
        &::placeholder{
            font-size: 20px ;
            color: black;
        }
        &:focus{
            outline: none;
        }
    }
    button{
        border: 2px solid ${color.cor1};
        background-color: ${color.cor1};
        font-size: 20px;
        color: #fff ;
    }
}

`

export default SectionContactsStyled