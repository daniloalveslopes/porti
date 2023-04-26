import styled from "styled-components";
import color from "./variaveis";

const MainStyled = styled.main`
    background-color: ${color.cor1};
    height: 100vh;
    .left{
        background-color: ${color.cor1};
        .textos{
            h1{
                color: ${color.cor2};
            }
        }
    }
    .right{
        background-color: ${color.cor2};
    }
    
    @media (max-width: 768px){
        .left{
            display: flex;
            justify-content: center;
            width: 100vw;
            
            .textos{
                
                h1{
                    font-size: clamp(40px, 8vw, 200px);
                }
                p{
                    font-size: 14px;
                }
            }
        }
        .right{
            display: none;
        }
    }
`
export default MainStyled