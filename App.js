import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Cookies from './components/Cookies'
import Home from './components/Home'
import PrivacyPolicy from './components/PrivacyPolicy'
import Error from './components/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import Sitemap from './components/Sitemap'
import Disclaimer from './components/Disclaimer'
import CookieConsent from "react-cookie-consent";


class App extends React.Component {
    render() {

        return ( <>
        
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path={'/#about'} component={Home}/>
                <Route path={'/#service'} component={Home}/>
                <Route path={'/#prices'} component={Home}/>
                <Route path={'/#photo'} component={Home}/>
                <Route path={'/#contact'} component={Home}/>
                <Route path={'/sitemap'} component={Sitemap}/>
                <Route path={'/privacy-policy'} component={PrivacyPolicy}/>
                <Route path={'/cookies'} component={Cookies}/>
                <Route path={'/disclaimer'} component={Disclaimer}/>
                <Route component={Error}/>
            </Switch>
        < Footer />
        <CookieConsent>
            This website uses cookies to enhance the user experience.
        </CookieConsent>
        </BrowserRouter> </>)
    }
}

export default App