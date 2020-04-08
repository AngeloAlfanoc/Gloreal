import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Parallax} from 'react-parallax';

import contentPicture from '../assets/img/content-picture-2.jpg'

class Pricetable extends React.Component {
    render() {
        return (

            <section id="prices">
                <div className="container-fluid bg-black w-100">
                <div className="d-flex flex-row-reverse flex-wrap">
                    <div className="col-md-6 px-0 py-3">
                        <Parallax
                            bgImage={contentPicture}
                            bgImageAlt="barber sign"
                            strength={300}>

                            <div
                                style={{
                                height: '778px'
                            }}/>
                        </Parallax>

                    </div>
                    <div className="col-md-6 bg-black px-0">
                        <ScrollAnimation animateIn="fadeIn">
                            <p className="pretitle-sec pt-5 procc-sev-t">Top service voor een betaalbare prijs!</p>
                            <h2 className="title invert procc-sev-t">Prijslijst</h2>
                            <div className="d-flex flex-row flex-wrap procc-sev-t text-white py-5">
                                <div className="col-md-12 pl-0 py-3">
                                    <div className="d-flex flex-row justify-content-between border-bottom">
                                        <h5>KNIPPEN VOOR MANNEN</h5>
                                        <p>€12</p>
                                    </div>
                                </div>
                                <div className="col-md-12 pl-0  py-3">
                                    <div className="d-flex flex-row justify-content-between border-bottom">
                                        <h5>BAARD SCHEREN</h5>
                                        <p>€5</p>
                                    </div>
                                </div>
                                <div className="col-md-12 pl-0  py-3">
                                    <div className="d-flex flex-row justify-content-between border-bottom">
                                        <h5>KNIPPEN VOOR KINDEREN</h5>
                                        <p>€10</p>
                                    </div>
                                </div>
                                <div className="col-md-12 pl-0  py-3">
                                    <div className="d-flex flex-row justify-content-between border-bottom">
                                        <h5>BAARD SCHEREN MET STIJL</h5>
                                        <p>€7</p>
                                    </div>
                                </div>
                                <div className="col-md-12 pl-0  py-3">
                                    <div className="d-flex flex-row justify-content-between border-bottom">
                                        <h5>WASSEN</h5>
                                        <p>€2</p>
                                    </div>
                                </div>
                                <div className="col-md-12 pl-0  py-3">
                                    <div className="d-flex flex-row justify-content-between border-bottom">
                                        <h5>KNIPPEN, BAARD & WASSEN</h5>
                                        <p>€20</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
                </div>
            </section>

        )
    }
}

export default Pricetable