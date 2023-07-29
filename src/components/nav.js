import image from "../images/863.jpg"
import { HashLink as Link } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

function nav() {
    return(
        <nav id="nav">
        <ul className="list1"> 
            <li><Link to="#">
                <img src={image} alt="" />
                </Link>
            </li>
            <li> <Link smooth to="#">Home</Link></li>
            <li> <Link smooth to='#about'>About Me</Link></li>
            <li> <Link smooth to="#skills">My Skills</Link></li>
            <li> <Link smooth to="#resume">Resume</Link></li>
            <li> <Link smooth to="#contact">Contact</Link></li>
          
        </ul>     
        <ul className="list2">              
                    <li className="fb"><a href="https://www.facebook.com/farhanalam0844/" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                    <li className="Li"><a href="https://www.linkedin.com/in/muhammad-farhan-alam-2a77a8236/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                    <li className="Gh">  <a href="https://github.com/Farhanalam0844" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
</li>
                   <li> <a href="https://twitter.com/farhanalam0844" target="_blank" rel="noreferrer"> <i className="fab fa-twitter"></i></a></li>

                </ul>
    </nav>   
    );
}
export default nav;