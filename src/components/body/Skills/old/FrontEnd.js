import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useContext } from "react";
import { Global } from '../../../../context/GlobalContext';

export default function FrontEnd() {

    const { setModalState } = useContext(Global);

    return (
        <div>
            <div className='title-container-skills' onClick={() => setModalState({ visible: true, type: 'new-modal' })}>
                <h1>Front End</h1>
                <div className='stars-container'>
                    <AiFillStar className='AiFillStar' />
                    <AiFillStar className='AiFillStar' />
                    <AiFillStar className='AiFillStar' />
                    <AiFillStar className='AiFillStar' />
                    <AiOutlineStar className='AiOutlineStar' />
                </div>
            </div>
        </div>
    )
}