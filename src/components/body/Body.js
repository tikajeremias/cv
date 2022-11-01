import AboutContainer from "./AboutContainer";
import Card from "./Card";
// import Proyect from "./Proyect";
import SkillContainer from "./SkillContainer";

export default function Body(){
    return (
        <div className='body-main-container'>
            <Card />
            <AboutContainer />
            <SkillContainer />
            {/* <Proyect /> */}
        </div>
    )
}