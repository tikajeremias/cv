import { useContext } from "react";
import Modal from "../../baseComponent/Modal";
import { Global } from "../../context/GlobalContext";
import FrontEndContent from "./Skills/FrontEndModal";
import BackEnd from "./Skills/BackEnd";
import FrontEnd from "./Skills/FrontEnd";
import UxUi from "./Skills/UxUi";

export default function SkillContainer() {
    
    const { modalState, setModalState } = useContext(Global);

    return (
        <div className='skills-main-container'>
            <div className='frontend-main-container'>
                <FrontEnd />
            </div>
            <Modal>
                {
                    (modalState.type === 'new-modal' &&
                        <FrontEndContent />)
                }
            </Modal>

            <div className='backend-container'>
                
                <BackEnd />
            </div>
            <Modal>
                BackEndContent
            </Modal>

            <div className='ux-ui-container'>
                <UxUi />
            </div>
            <Modal>
                UxUiContent
            </Modal>

        </div>
    )
}