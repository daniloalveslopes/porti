import SectionSkillsStyled from "./styled/SectionSkillsStyled";

function SectionSkills(){
    return(
        <SectionSkillsStyled id="skills" className="p-5 flex flex-col justify-between relative">
            <h1 className="text-5xl font-bold absolute top-0 ml-3">Skills</h1>
            <div className="content-skills flex justify-between items-center text-2xl uppercase mt-20 px-20 max-sm:flex-col gap-5">
                <div className="skills flex flex-col  justify-center ">
                    <h2 className="text-4xl font-semibold mb-3">HABILIADADES:</h2>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>SASS</span>
                    <span>TAILWIND</span>
                    <span>JAVASCRIPT</span>
                    <span>REACT</span>  
                </div>
                <div className="softSkills flex flex-col justify-center ">
                    <h2 className="text-4xl font-semibold mb-3">SOFT SKILLS:</h2>
                    <span>Trabalho em equipe</span>
                    <span>Comunicação</span>
                    <span>Vontade de aprender</span>
                    <span>Criatividade</span>
                    <span>Aprendizado contínuo</span>
                </div>
            </div>
        </SectionSkillsStyled>
    )
}
export default SectionSkills