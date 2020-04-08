import React from 'react';
import Nav from './Nav'
import Burger from './BurgerMenu'
import Slick from './Slick'
import {BrowserView, MobileView} from "react-device-detect";

class Header extends React.Component {
    render() {
        return (
            <header id="home">
                <BrowserView>
                    <Nav/>
                </BrowserView>
                <MobileView>
                    <Burger/>
                </MobileView>
                <Slick/>
            </header>
        )
    }
}

export default Header