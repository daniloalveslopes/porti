import styled from "styled-components";
import color from "./variaveis";
const HeaderStyled = styled.header`
    transition: 0.5s;
    /* background-color: transparent ; */
    color: ${color.cor2};
    position: fixed ;
    top: 0;
    width: 100vw;
    nav{
        color: ${color.cor5};
    }
    .btnShow{
        display: none;
    }
    @media (max-width: 600px){
        .logo{
            margin: 0 auto;
        }
        ul{
            background-color: white;
            transition: left 0.5s;
            position: absolute;
            left: 0;
            top: 100%;
            height: calc(100vh - 72px);
            width: 100%;
            display: flex; 
            flex-direction: column;
            align-items: center; padding-top: 30px;
            color: ${color.cor1};
            left: -100%; 
        }
        .show{
            display: flex;
            left: 0px; 
        }
        li{
            font-size: 25px;
            color: #000;
        }
        .btnShow{  
            width: 30px;
            height: 4px;
            background: #000;
            display: block;
            margin-top: -10px;
            &::after{
                content "";
                display: block;
                background-color: #000;
                width: 30px;
                height: 4px;
                margin-top: 5px;
            }
            &::before{
                content "";
                display: block;
                background-color: #000;
                width: 30px;
                height: 4px;
                margin-top: 10px;
            }
        }
}
`
export  default HeaderStyled