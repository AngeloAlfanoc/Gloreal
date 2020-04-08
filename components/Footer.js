import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Contact extends React.Component {
    render() {

        return (

            <footer id="end">
                <div className="container text-white">
                    <div className="d-flex flex-row flex-wrap justify-content-center">
                        <div className="col-md-4">
                            <h2 className="title-small invert m-0 pt-4">Gloreal</h2>
                            <ul>
                                <li className="nav-item">
                                    <FontAwesomeIcon icon={faChevronRight}/><a className="px-1" href='/'>
                                        Home</a>
                                </li>
                                <li className="nav-item">
                                    <FontAwesomeIcon icon={faChevronRight}/><a className="px-1" href='/#about'>
                                        Over ons</a >
                                </li>
                                <li className="nav-item">
                                    <FontAwesomeIcon icon={faChevronRight}/><a className="px-1" href='/#service'>
                                        Service</a>
                                </li>
                                <li className="nav-item">
                                    <FontAwesomeIcon icon={faChevronRight}/><a className="px-1" href='/#prices'>
                                        Prijzen</a>
                                </li>
                                <li className="nav-item">
                                    <FontAwesomeIcon icon={faChevronRight}/><a className="px-1" href='/#photo'>
                                        Foto's</a>
                                </li>
                                <li className="nav-item">
                                    <FontAwesomeIcon icon={faChevronRight}/><a className="px-1" href='/#contact'>
                                        Contact</a>
                                </li>
                                <li className="nav-item">
                                    <FontAwesomeIcon icon={faChevronRight}/><a className="px-1" href='/privacy-policy'>
                                        Privacy policy</a>
                                </li>
                                <li className="nav-item">
                                    <FontAwesomeIcon icon={faChevronRight}/><a className="px-1" href='/cookies'>
                                        Cookies</a>
                                </li>
                                <li className="nav-item">
                                    <FontAwesomeIcon icon={faChevronRight}/><a className="px-1" href='/disclaimer'>
                                        Disclaimer</a>
                                </li>
                                <li className="nav-item">
                                    <FontAwesomeIcon icon={faChevronRight}/><a className="px-1" href='/sitemap'>
                                        Sitemap</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChevronRight}/><a className="px-1" href="https://www.nuevostylo.be/">
                                        Nuevostylo</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h2 className="title-small invert  m-0 pt-4">Contact</h2>
                            <p><a href="tel:0491135531">+32 (0) 491 13 55 31</a></p>
                            <h2 className="title-small invert  m-0 pt-4">Social</h2>
                            <div>
                                <span className="mr-2">
                                    <a
                                        className="social-icons"
                                        href="https://www.instagram.com/barbershop_nuevostylo/"><FontAwesomeIcon icon={faInstagram}/></a>
                                </span>
                                <span className="mr-2">
                                    <a
                                        className="social-icons"
                                        href="https://www.facebook.com/Barbershop.Nuevostylo/"><FontAwesomeIcon icon={faFacebook}/></a>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex flex-column">
                                <h2 className="title-small invert  m-0 pt-4">Locatie</h2>
                                <div>
                                    <p>Stalenstraat 161, 3600 Genk</p>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20079.178759840263!2d5.499796289550781!3d51.01804530000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbe!4v1581040086605!5m2!1sen!2sbe"
                                        title="location"
                                        width={100 + '%'}
                                        height={225}
                                        frameBorder={0}
                                        allowFullScreen=""></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-white text-center py-4">
                    
                    <div className="d-flex flex-row justify-content-center">
                        <div>
                        2019 - {new Date().getFullYear() + " "}

                        © All Rights Reserved, design & development by 
                        <a href="http://www.methodsagency.be"><span className="pl-1">methods</span></a></div>

                    </div>

                </div>
            </footer>

        )
    }
}

export default Contact