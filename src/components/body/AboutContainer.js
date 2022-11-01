// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import About from "./about/About";
// import { useContext } from "react";
// import { Global } from "../../context/GlobalContext";

export default function AboutContainer() {

    // const { modalState, setModalState } = useContext(Global);
    // USA UN ARRAY CON ID Y QUE LOS BOTONES SUMEN Y RESTEN PARA MOSTRAR LOS ITEMS DEL ABOUT
    return (
        <div className='about-main-container'>
            <div className='about-container'>
                <div className='about-info'>
                    <About 
                    title='About me' 
                    description={`I'm a self-taught fullstack developer with 1 year of practice, actively looking to expand my knowledge in Web technologies.
                    asdasdLately, I have found passion in design, and want to professionalize myself in UX/UI development.`} />
                </div>
            </div>
        </div>
    )
}