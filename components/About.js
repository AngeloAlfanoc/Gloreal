import React from 'react';
import {Parallax} from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import ContentPicture from '../assets/img/content-picture.jpg'
import Signed from '../assets/img/signed.png'

class About extends React.Component {

    render() {

        return (
            <section id="about">
                <div className="container py-5">
                    <div className="row">
                        <ScrollAnimation animateIn="fadeIn">
                            <p className="pretitle pt-5">Introductie</p>
                            <h2 className="text-center w-100">Gloreal - Over ons</h2>
                            <p className="text-center pt-2 pb-3 px-3">Barbershop Gloreal is een modern
                                herenkapsalon voor jong en oud en is gelegen in Genk. Onze motto is: "Jouw haar,
                                jouw stijl". Wij nemen tijd voor onze klanten, waardoor iedereen zich thuis
                                voelt in onze zaak. Bovendien bieden we top kwalitieve knipbeurten aan voor een
                                betaalbare prijs. Graag zien we jullie in ons kapsalon en dit zonder afspraak
                                natuurlijk.</p>
                        </ScrollAnimation>
                        <div className="d-flex flex-row justify-content-end w-100 pr-5">
                        <ScrollAnimation animateIn="fadeIn">
   
                                <img alt="signed by Mehdi Kassem" width={200} src={Signed} ></img>
                            
                            
                        </ScrollAnimation></div>
                    </div>
                </div>
                <div className="container-fluid pt-5">
                    <div className="d-flex flex-row flex-wrap">
                        <div className="col-md-6 px-0">
                            <Parallax
                                bgImage={ContentPicture}
                                bgImageAlt="About pic"
                                strength={300}>

                                <div
                                    style={{
                                    height: '735px'
                                }}/>
                            </Parallax>

                        </div>
                        <div className="col-md-6 bg-black px-0 procc-sev-t">
                            <ScrollAnimation animateIn="fadeIn">
                                <p className="pretitle-sec pt-5 procc-sev-t">Meer als 15 jaar ervaring.</p>
                                <h2 className="title invert procc-sev-t">Ons expertise</h2>
                                <p className="pt-2 text-white procc-sev-t pb-2">Met meer dan 15 jaar ervaring en een groep van mensen die persoonlijk de opleiding hebben genoten van
                                Mehdi een guru in de vak kom je terecht bij een shop waar je echt geholpen wordt met wat je nodig hebt.  <br></br><br></br>
                                
                                Naast een robuust mannelijke kapsel kunnen wij jou ook voozien van een gewone snit. Je haar laten stylen? Je baard laten trimmen? Een gratis kop koffie of thee met een gratis toegang tot ons wifi netwerk! 
                                <br></br><br></br>

                                Kom gerust eens langs om eens the babbelen met ons!
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default About