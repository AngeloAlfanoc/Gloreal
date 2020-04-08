import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import svg1 from '../assets/svg/002-razor-2.svg';
import svg2 from '../assets/svg/007-mustache.svg';
import svg3 from '../assets/svg/003-shaving-cream.svg';
import svg4 from '../assets/svg/001-tie.svg';
import svg5 from '../assets/svg/013-comb-2.svg';
import svg6 from '../assets/svg/016-barber.svg';

class Services extends React.Component {
    render() {

        return (
            <section id="service" className="container py-5">
                  <ScrollAnimation animateIn="fadeIn">
                <p className="pretitle pt-5">Aanbod</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="d-flex flex-row flex-wrap">
                        <div className="col-md-4 col-sm-12 d-flex flex-column w-100 align-items-center">
                            <img alt="razor" className="my-3" src={svg1} width={75} height={100}/>
                            <h2>Knippen</h2>
                            <p>Ook mannen hechten meer en meer belang aan het uiterlijk. Daarom is ook het
                                creëren van een nieuwe look een belangrijk punt. Wilt u dus iets totaal nieuws
                                van kapsel maar bent u er niet uit wat u juist wenst? Dan ben jij bij ons op de
                                juiste plaats!</p>
                        </div>
                        <div className="col-md-4 col-sm-12 d-flex flex-column w-100 align-items-center">
                            <img alt="mustache" className="my-3" src={svg2} width={75} height={100}/>
                            <h2>Trimmen</h2>
                            <p>Het kost tijd om een mooi gevormde baard uit te groeien, te verzorgen, te
                                onderhouden. Wij hechten hier enorm veel belang aan, met oog voor detail zorgen
                                wij voor een optimale voorkomen.</p>
                        </div>

                        <div className="col-md-4 col-sm-12 d-flex flex-column w-100 align-items-center">
                            <img alt="shavingcream" className="my-3" src={svg3} width={75} height={100}/>
                            <h2>Wassen</h2>
                            <p>Naast het knippen en trimmen van jouw haar zorgen we ervoor dat jou haar een
                                wasbeurt gekregen heeft.
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-12 d-flex flex-column w-100 align-items-center">
                            <img alt="tie" className="my-3" src={svg4} width={75} height={100}/>
                            <h2>Kwaliteit</h2>
                            <p>Het volledige pakket is belangrijk voor ons, door hoort dus ook de verzorging
                                van onze medewerkers bij. Onze medewerkers hebben altijd een goed verzorgde
                                voorkomen, daarnaast zorgen wij dat uw kapsel van top kwaliteit is!
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-12 d-flex flex-column w-100 align-items-center">
                            <img alt="comb" className="my-3" src={svg5} width={75} height={100}/>
                            <h2>Top Service</h2>
                            <p>Niet alleen kunt u genieten van een divers aanbod van diensten; knippen,
                                wassen, stylen, baardrimmen,... U kunt ook genieten van een gratis kopje koffie
                                of thee en u heeft bovendien gratis toegang tot ons wifi-netwerk.</p>
                        </div>
                        <div className="col-md-4 col-sm-12 d-flex flex-column w-100 align-items-center">
                            <img alt="barber" className="my-3" src={svg6} width={75} height={100}/>
                            <h2>Laagste prijzen!</h2>
                            <p>Top service voor een betaalbare prijs. Een knipbeurt voor mannen voor maar
                                liefst €12. Er is dus geen enkele reden om je knipbeurt uit te stellen!</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </section>
        )
    }
}

export default Services