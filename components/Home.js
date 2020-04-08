import React from 'react';
import MetaTags from 'react-meta-tags';
import About from './About'
import Services from './Services'
import Pricetable from './Pricetable'
import Photos from './Photos'
import Contact from './Contact'

class Home extends React.Component {

    componentDidMount() {
        window.onload = function () {
            window.scrollTo(0, 0);
        }
    }
    render() {

        return (
            <main>
                <MetaTags>
                    <title>Barbershop Gloreal, kapper in Genk.</title>
                    <meta name="description" content="Barbershop Gloreal is een modern herenkapsalon voor jong en oud en is gelegen in Genk."/>
                    <meta property="og:title" content="Barbershop Gloreal, kapper in Genk."/>
                </MetaTags>
                < About/>
                <Services/>
                < Pricetable/>
                <Photos/>
                < Contact/>
            </main>
        )
    }
}

export default Home