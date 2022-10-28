import About from "./About";
import Card from "./Card";
import Proyect from "./Proyect";
import SkillContainer from "./SkillContainer";

export default function Body(){
    return (
        <div className='body-main-container'>
            <Card />
            <About />
            <SkillContainer />
            <Proyect />
        </div>
    )
}