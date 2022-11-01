import { useContext } from "react";
import Modal from "../../baseComponent/Modal";
import { Global } from "../../context/GlobalContext";
import Skills from "./Skills/Skills";

export default function SkillContainer() {

    const { modalState, setModalState } = useContext(Global);

    return (
        <div className='skills-main-container'>
            <span id='skills-link'>click skill for more details</span>
            {/* <div className='frontend-main-container' onClick={() => setModalState({ visible: true, type: 'front-end' })}> */}
            <div className='frontend-main-container' onClick={() => {

                modalState.visible === false ? (
                    setModalState({ visible: true, type: 'front-end' })
                ) : (
                    setModalState({ visible: false })
                )

            }}>
                <Skills title='Front End' stars={4} />
            </div>
            {
                modalState.type === 'front-end' &&
                <Modal>
                    <Skills title='Html' stars={4} />
                    <Skills title='Css' detail='(Pure, Tailwind, Bootstrap)' stars={4} />
                    <Skills title='Javascript' detail='(Pure, jQuery)' stars={3} />
                    <Skills title='React' stars={3} />
                </Modal>
            }
            <div className='backend-container' onClick={() => {

                modalState.visible === false ? (
                    setModalState({ visible: true, type: 'back-end' })
                ) : (
                    setModalState({ visible: false })
                )

            }}>
                <Skills title='Back End' stars={2} />
            </div>
            {
                modalState.type === 'back-end' &&
                <Modal>
                    <Skills title='PHP' detail='(Laravel)' stars={3} />
                    <Skills title='NodeJS' detail='(REST API, Auth)' stars={2} />
                    <Skills title='Databases' detail='(MySQL, MongoDB)' stars={3} />
                </Modal>
            }
            <div className='ux-ui-container' onClick={() => {

                modalState.visible === false ? (
                    setModalState({ visible: true, type: 'other' })
                ) : (
                    setModalState({ visible: false })
                )

            }}>
                <Skills title='Other' stars={3} />
            </div>
            {
                modalState.type === 'other' &&
                <Modal>
                    <Skills title='GitHub' stars={2} />
                    <Skills title='Microsoft Office' stars={4} />
                </Modal>
            }
            <div className='ux-ui-container' onClick={() => {

                modalState.visible === false ? (
                    setModalState({ visible: true, type: 'design' })
                ) : (
                    setModalState({ visible: false })
                )

            }}>
                <Skills title='Design' stars={3} />
            </div>
            {
                modalState.type === 'design' &&
                <Modal>
                    <Skills title='Photoshop' stars={4} />
                    <Skills title='Blender' stars={3} />
                </Modal>
            }

        </div>
    )
}