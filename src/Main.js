import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";

// css
import './Main.css';

export default function MainPage() {


    return (
        <>
            <div className="big-container">
                <Navbar />
                <Body />
            </div>
            <div className="footer-svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#202022" fill-opacity="1" d="M0,64L30,58.7C60,53,120,43,180,74.7C240,107,300,181,360,176C420,171,480,85,540,90.7C600,96,660,192,720,224C780,256,840,224,900,197.3C960,171,1020,149,1080,160C1140,171,1200,213,1260,229.3C1320,245,1380,235,1410,229.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>
            <Footer />
        </>
    )
}
