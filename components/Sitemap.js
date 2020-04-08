import React from 'react';
import '../assets/css/sitemap.css'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
class Sitemap extends React.Component {
    componentDidMount() {
        const header = document.getElementById('home')
        header.style.display = "none";
        const footer = document.getElementById('end')
        footer.style.display = "none";
    }
    render() {

        return ( <> < div className = "sitemap container pb-5" > 
        <a href="/"><h2 className="pb-2"> <FontAwesomeIcon className="mr-2" icon={faArrowLeft}/>Back to main page</h2></a>
        <h2 className="pt-5">Sitemap</h2>
        <p>Hier vind je een overzicht van alle links die ter beschikking zijn op deze website</p>
         <ul >
            <li className="nav-item">
                <FontAwesomeIcon icon={faChevronRight}/>
                <a className="px-1" href='/'>
                    Home</a>
            </li>
            <li className="nav-item">
                <FontAwesomeIcon icon={faChevronRight}/>
                <a className="px-1" href='/#about'>
                    Over ons</a >
            </li>
            <li className="nav-item">
                <FontAwesomeIcon icon={faChevronRight}/>
                <a className="px-1" href='/#service'>
                    Service</a>
            </li>
            <li className="nav-item">
                <FontAwesomeIcon icon={faChevronRight}/>
                <a className="px-1" href='/#prices'>
                    Prijzen</a>
            </li>
            <li className="nav-item">
                <FontAwesomeIcon icon={faChevronRight}/>
                <a className="px-1" href='/#photo'>
                    Foto's</a>
            </li>
            <li className="nav-item">
                <FontAwesomeIcon icon={faChevronRight}/>
                <a className="px-1" href='/#contact'>
                    Contact</a>
            </li>
            <li className="nav-item">
                <FontAwesomeIcon icon={faChevronRight}/>
                <a className="px-1" href='/privacy-policy'>
                    Privacy policy</a>
            </li>
            <li className="nav-item">
                <FontAwesomeIcon icon={faChevronRight}/>
                <a className="px-1" href='/cookies'>
                    Cookies</a>
            </li>
            <li className="nav-item">
                <FontAwesomeIcon icon={faChevronRight}/>
                <a className="px-1" href='/disclaimer'>
                    Disclaimer</a>
            </li>
            <li className="nav-item">
                <FontAwesomeIcon icon={faChevronRight}/>
                <a className="px-1" href='/sitemap'>
                    Sitemap</a>
            </li>
            <li>
                <FontAwesomeIcon icon={faChevronRight}/>
                <a className="px-1" href="https://www.nuevostylo.be/">
                    Nuevostylo</a>
            </li>
        </ul>  </div > </ >)
    }
}

export default Sitemap