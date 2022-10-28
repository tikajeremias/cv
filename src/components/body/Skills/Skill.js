import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function Skill(props) {

    // const totalStars = 5
    // const [stars, setStars] = useState(props.stars)

    // for (stars; stars < totalStars; stars++) {
    //     console.log(props.stars);        
    // }

    return (
        <div className='title-container-skills'>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div className='stars-container'>
                <AiFillStar className='AiFillStar'/>
                <AiFillStar  className='AiFillStar'/>
                <AiOutlineStar  className='AiOutlineStar'/>
                <AiOutlineStar  className='AiOutlineStar'/>
                <AiOutlineStar  className='AiOutlineStar'/>
            </div>
        </div>
    )
}