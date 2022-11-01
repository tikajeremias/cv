import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// En el padre, hay que llamar asi:
// <Skills title='Titulo' stars={3} />

export default function Skills(props) {

  const Repeat = (props) => {
    // esto se puede hacer en 1 sola linea
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div className='StarsNumber'>{items}</div>;
  }

  return (
    <div className='title-container-skills'>
      <div className='title-and-p'>
        <h1>{props.title}</h1><p>{props.detail}</p>
      </div>
      <div className='stars-container'>
        <Repeat numTimes={props.stars}>
          {(index) => <div key={index}>
            <AiFillStar className='AiFillStar' />
          </div>}
        </Repeat>
        <Repeat numTimes={5 - props.stars}>
          {(index) => <div key={index}>
            <AiOutlineStar className='AiOutlineStar' />
          </div>}
        </Repeat>
      </div>
    </div>
  )
}
