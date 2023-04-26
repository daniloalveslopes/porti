
import Modal from "./styled/ModalVideoAboutStyled"

function ModalVideoAbout() {

    

function PauseVideo(){
    let iframe = document.querySelector("iframe")
    // let src2 = iframe.src
    let src = iframe.src
    iframe.src = ""
    iframe.src = src
    console.log(src);
}
function ModalShow(){

    document.querySelector(".how").classList.remove("block")
    document.querySelector(".how").classList.add("hidden")
    document.querySelector("body").style.overflowY = "scroll"
    PauseVideo()
}

    return(
        <div className="relative cardModal translate-y-4">
           <Modal  className="modal p-2 ">
            <iframe  src="https://www.youtube.com/embed/pS4Hw6TBghE" title="minha Presenta" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Modal> 
            <div onClick={ModalShow }  className="absolute -top-3 -right-3 cursor-pointer btnClose bg-black w-8 h-8 rounded-full flex justify-center items-center text-white ">
                X
            </div>
        </div>
        
    )
}

export default ModalVideoAbout