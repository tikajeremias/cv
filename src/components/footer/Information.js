import { AiFillGithub, AiFillInstagram, AiFillMail, AiOutlineWhatsApp } from 'react-icons/ai';

export default function Information() {
    return (
        <div className='information'>
            <div className='information-links'>
                <h1>Contact:</h1>
                <AiOutlineWhatsApp className='AiOutlineWhatsApp' /><h4>1122562288</h4>
                <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNqspQNqBwtrZMxsxwXwgpkBztsZqQMRdwZRrbtcRSBxkbjBfdgmsWTFBWRVctgCxrKMnV'>
                    <AiFillMail className='AiFillMail' /><h4>tikajeremias@gmail.com</h4></a>
                <a href='https://github.com/tikajeremias'>
                    <AiFillGithub className='AiFillGithub' /><h4>@tikajeremias</h4></a>
                <a href='https://www.instagram.com/tika_jere/?hl=es-la'>
                    <AiFillInstagram className='AiFillInstagram' /><h4>@tika_jere</h4></a>
            </div>
            <div>
                <h1>Location:</h1>
                <div className='home-div'>
                    <a href='https://www.google.com.ar/maps/place/Colegiales,+CABA/@-34.574632,-58.460402,15z/data=!3m1!4b1!4m5!3m4!1s0x95bcb5dd407c17db:0xf700e263552c9fa5!8m2!3d-34.5760218!4d-58.4483546'><div className='home' /></a>
                    <br /><h4>Argentina - Buenos Aires - Colegiales - CABA</h4>
                </div>
            </div>
        </div>
    )
}