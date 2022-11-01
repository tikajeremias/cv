import Button from "./Button";

export default function Navbar() {
    return (
        <>
            <p className="responsive-invitation">This site is responsive, I invite you to try it out!</p>
            <div className='navbar-main-container'>
                <Button name='About me' link='#about-link'/>
                <Button name='Skills' link='#skills-link'/>
                {/* <Button name='Proyects' /> */}
                <Button name='Contact' link='#contact-link'/>
            </div>
        </>
    )
}