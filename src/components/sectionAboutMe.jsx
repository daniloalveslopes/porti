import ModalVideoAbout from "./ModalVideoAbout"
import SectionMainStyled from "./styled/SectionAboutMeStyled"
function SectionMain(){
    function showModal(){
        document.querySelector(".how").classList.remove("hidden")
        document.querySelector(".how").classList.add("block")
        document.querySelector("body").style.overflowY = "hidden"
    }
    return(
        <SectionMainStyled id="about" className="p-5 flex flex-col  ">
                <h1 className="text-5xl font-medium mb-auto">About Me</h1>
            <div className="textSobre h-full flex flex-col justify-center p-2 ">
                <div className="mb-20 text-3xl leading-10">
                    <p className="txt">Meu nome é <span className="span font-semibold">Danilo Lopes</span>, sou um desenvolvedor <span className="font-semibold">Front-end</span>.</p>
                    <p className="txt">Atualmente eu estou sem emprego, e gostaria de atuar no desenvolvimento front-end <br />
                    Estudo faz dois anos, Fiz cursos como:<span className="font-semibold"> OneBitCode </span> e <span className="font-semibold"> B7web</span>, tenho um conhecimento bem sólido nas tecnologias que eu Utilizo<br />
                    Eu faço aplicações Responsivas e performaticas, sempre seguindo padrões exigidos.</p>
                </div>
                <div className="buttonArea flex gap-5">
                <button className="transition-transform hover:scale-105 dowloadBtn p-3 mb-12 bg-green-500 w-48 rounded-xl text-xl text-white">
                    <a href="/cv.pdf" download>DOWLOAD CV</a>
                </button>
                <button onClick={showModal} className="transition-transform hover:scale-105 mb-12 dowloadBtn p-3 bg-green-500  w-44 rounded-xl text-xl text-white">
                    APRESENTAÇÃO VIDEO
                </button>
                </div>
                <div className={`how flex justify-center items-center modalArea fixed top-0 left-0   bg-white h-full w-full hidden`   }>
                     <div>
                        <ModalVideoAbout />
                     </div>
                </div>
            </div>
            
        </SectionMainStyled>
    )
}

export default SectionMain