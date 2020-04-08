import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider01 from "../assets/img/slider01.jpg"
import slider02 from "../assets/img/slider02.jpg"
import slider03 from "../assets/img/slider03.jpg"

import React from "react";
import Slider from "react-slick";

import ScrollAnimation from 'react-animate-on-scroll';

import AnchorLink from 'react-anchor-link-smooth-scroll'

class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 800,
            autoplaySpeed: 8000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            pauseOnFocus: true,
            pauseOnHover: false,
            pauseOnDotsHover: false,
            autoplay: true
        };
        return (
            <Slider {...settings}>
                <div>
                    <div className="headline">
                        <ScrollAnimation animateIn="fadeIn">
                            <h3 className="my-1">welkom bij Gloreal</h3>
                            <h1 className="m-0">Uw Barber Shop!</h1>
                            <AnchorLink offset='100' className="btn-invert btn text-white border my-5" href='#service'>Onze services</AnchorLink >
                        </ScrollAnimation>
                    </div>
                    <img className="s-zoom" alt="Carrousel item1" src={slider02}></img>
                </div>
                <div>
                    <div className="headline">
                        <ScrollAnimation animateIn="fadeIn">
                            <h3 className="my-1">welkom bij Gloreal</h3>
                            <h1 className="m-0 text-center">Jouw haar, Jouw stijl!</h1>
                            <AnchorLink offset='100' className="btn-invert btn text-white border my-5" href='#prices'>Onze prijzen</AnchorLink >
                        </ScrollAnimation>
                    </div>
                    <img className="s-zoom" alt="Carrousel item2" src={slider01}></img>
                </div>
                <div>
                    <div className="headline">
                        <ScrollAnimation animateIn="fadeIn">
                            <h3 className="my-1">welkom bij Gloreal</h3>
                            <h1 className="m-0  text-center">Jij hebt een vraag?</h1>
                            <AnchorLink offset='100' className="btn-invert btn text-white border my-5" href='#contact'>Contacteer ons!</AnchorLink >
                        </ScrollAnimation>
                    </div>
                    
                    <img className="s-zoom" alt="Carrousel item3" src={slider03}></img>
                </div>
            </Slider>
        );
    }
}
export default SimpleSlider;