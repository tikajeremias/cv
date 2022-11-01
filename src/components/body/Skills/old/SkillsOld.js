// En el padre, hay que llamar asi:
// <Skills title='Titulo' stars={3} />

export default function Skills(props) {

  return (
    <div>
      <h1>{props.title}</h1>
      {Array.from({ length: props.stars }, (_, i) => (
          <p key={i}>*</p>
      ))
      }
    </div>
  )
}
