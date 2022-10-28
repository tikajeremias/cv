import Button from "./Button";

export default function Navbar() {
    return (
        <div className='navbar-main-container'>
            <Button name='About me' />
            <Button name='Skills' />
            <Button name='Proyects' />
            <Button name='Contact' />
        </div>
    )
}