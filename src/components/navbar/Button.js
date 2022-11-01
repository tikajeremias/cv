export default function Button(props){
    return (
        <a href={props.link}><button>{props.name}</button></a>
    )
}