import { Outlet,Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import  { faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin"
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons/faSearchengin";
export default function NavBar() {
    return(
        <>
        <nav>
            <ul className="nav1">

                <a href="">Slot </a>
                <a href="">Form </a>
                <a href="">Classes </a>
                <a href=""> Documentation</a>
                <a href="">Discover</a>
                <a href="">News</a>
            <div className="iconNav"> 
                <FontAwesomeIcon style={{padding:'0 10px'}} icon={faFacebook} /> 
                <FontAwesomeIcon  style={{padding:'0 10px'}}  icon={faInstagram} />
                <FontAwesomeIcon  style={{padding:'0 10px'}}  icon={faLinkedin} />
                <FontAwesomeIcon  style={{padding:'0 10px'}}  icon={faTwitter} />
            </div>
            </ul>
            <ul className="nav2">
                <a style={{fontSize:'4vh'}} href=""> Gwen</a>
                <div className="iconNav ">
                    <a href="">Slot </a>
                    <a href="">Form </a>
                    <a href="">Classes </a>
                    <a href=""> Documentation</a>
                    <a href="">Discover</a>
                    <a href="">News</a>
                <a href=""><FontAwesomeIcon  style={{padding:'0 10px', fontSize:'2vh'}}  icon={faSearchengin}/></a>
                </div>
            </ul>
        </nav>     
        <Outlet/>
        <footer>
             <ul className="nav1">

                <a href="">Slot </a>
                <a href="">Form </a>
                <a href="">Classes </a>
                <a href=""> Documentation</a>
                <a href="">Discover</a>
                <a href="">News</a>
                <div className="iconNav"> 
                <FontAwesomeIcon style={{padding:'0 10px'}} icon={faFacebook} /> 
                <FontAwesomeIcon  style={{padding:'0 10px'}}  icon={faInstagram} />
                <FontAwesomeIcon  style={{padding:'0 10px'}}  icon={faLinkedin} />
                <FontAwesomeIcon  style={{padding:'0 10px'}}  icon={faTwitter} />
                </div>
            </ul>
           
        </footer>
        </>
    )
}