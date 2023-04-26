import MainStyled from "./styled/MainStyled"

function Main(){
    return(
        <MainStyled id="home" className="text-white flex">
            <div className="left w-2/3 flex justify-center items-center">
                <div className="textos">
                    <h1 className="text-7xl font-bold">Desenvolvedor <br />
                        Front-End
                    </h1>
                    <p className="mt-3 font-medium text-lg">Gosto de criar produtos front-end sólidos e <br /> escaláveis ​​com ótimas experiências de usuário.</p>
                </div>
            </div>
            <div className="right w-1/3">

            </div>
        </MainStyled>
    )
}

export default Main