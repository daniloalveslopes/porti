import HeaderStyled from "./styled/HeaderStyled"
import { useState } from "react"

function Header(){
    document.querySelector("html")
    const [classe, setClasse] = useState("")
    function ShowMenu(){
        if(classe === ""){

            setClasse("show")
        }else if(classe === "show"){
            setClasse("")
        }
    }
    function hiddleHeaderColor(){
        if(window.scrollY > 429){
            document.querySelector("header").style.backgroundColor = "#fff";
            document.querySelector("header").style.zIndex = 100;
            document.querySelector(".logo").style.color = "#4831D4";
            document.querySelector("nav").style.color = "#4831D4";
        }else{
            document.querySelector("nav").style.color = "#000";
            document.querySelector(".logo").style.color = "#CCF381";
            document.querySelector("header").style.backgroundColor = "rgb(255,255,2, 0)";
            
        }
    }
    window.addEventListener("scroll", hiddleHeaderColor)
    return(
        <HeaderStyled className="flex items-center justify-between px-16 py-8 relative ">
            <div className="logo text-4xl">
                <p><a href="#home">DANILODEV</a></p>
            </div>
            <nav>
            <ul className={'flex gap-7 '+ classe + ' text-xl font-semibold'}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About me</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#contacts">Contacts</a>
                </li>
            </ul>
            <button className="btnShow" onClick={ShowMenu}></button>
            </nav>
        </HeaderStyled>
    )
}
export default Header