import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function UxUi() {
    return (
        <div className='title-container-skills'>
            <div>
                <h1>Ux / Ui</h1>
            </div>
            <div className='stars-container'>
                <AiFillStar className='AiFillStar'/>
                <AiFillStar  className='AiFillStar'/>
                <AiFillStar  className='AiFillStar'/>
                <AiOutlineStar  className='AiOutlineStar'/>
                <AiOutlineStar  className='AiOutlineStar'/>
            </div>
        </div>
    )
}