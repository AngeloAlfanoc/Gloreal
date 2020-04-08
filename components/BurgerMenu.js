import React from 'react'
import {slide as Menu} from 'react-burger-menu'
import classnames from 'classnames'

class Burger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
            headerHeight: null,
            aboutHeight: null,
            serviceHeight: null,
            priceHeight: null,
            photoHeight: null,
            contactHeight: null,
            footerHeight: null
        }
    }
    handleBoxes = () => {

        const header = document.getElementsByTagName('header')
        const about = document.getElementById('about')
        const service = document.getElementById('service')
        const contact = document.getElementById('contact')
        const footer = document.getElementsByTagName('footer')

        if (about) {
            this.setState({
                headerHeight: header.home.offsetHeight,
                aboutHeight: about.offsetHeight,
                serviceHeight: header.home.offsetHeight + about.offsetHeight,
                priceHeight: header.home.offsetHeight + about.offsetHeight + service.offsetHeight,
                photoHeight: header.home.offsetHeight + about.offsetHeight + service.offsetHeight + 858,
                contactHeight: header.home.offsetHeight + about.offsetHeight + service.offsetHeight + 858 + contact.offsetHeight,
                footerHeight: header.home.offsetHeight + about.offsetHeight + service.offsetHeight + 858 + contact.offsetHeight + footer.offsetHeight
            })
        }

    };
    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen})
    }
    closeMenu() {
        this.setState({menuOpen: false})
    }
    toggleMenu() {
        this.setState(state => ({
            menuOpen: !state.menuOpen
        }))
    }
    showSettings(event) {
        event.preventDefault();
    }
    componentDidMount() {
        this.handleBoxes()
    }
    render() {
        return (

            <div id="outer-container">
                <Menu
                    pageWrapId={"page-wrap"}
                    outerContainerId={"outer-container"}
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}>
                    <main id="page-wrap">
                        <ul>
                            <li className="nav-item">
                                <a
                                    onClick={() => this.closeMenu()}
                                    className={classnames("nav-link anchor", {
                                    "active": window.pageYOffset < this.state.headerHeight
                                })}
                                    href='/'>Home</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => this.closeMenu()}
                                    className={classnames("nav-link anchor", {
                                    "active": window.pageYOffset > this.state.headerHeight && window.pageYOffset < this.state.serviceHeight
                                })}
                                    href='/#about'>Over Ons</a >
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => this.closeMenu()}
                                    className={classnames("nav-link anchor", {
                                    "active": window.pageYOffset > this.state.serviceHeight && window.pageYOffset < this.state.priceHeight
                                })}
                                    href='/#service'>Service</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => this.closeMenu()}
                                    className={classnames("nav-link anchor", {
                                    "active": window.pageYOffset > this.state.priceHeight && window.pageYOffset < this.state.photoHeight
                                })}
                                    href='/#prices'>Prijzen</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => this.closeMenu()}
                                    className={classnames("nav-link anchor", {
                                    "active": window.pageYOffset > this.state.photoHeight && window.pageYOffset < this.state.contactHeight
                                })}
                                    href='/#photo'>Foto's</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => this.closeMenu()}
                                    className={classnames("nav-link anchor", {
                                    "active": window.pageYOffset > this.state.contactHeight
                                })}
                                    href='/#contact'>Contact</a>
                            </li>
                        </ul>
                    </main>
                </Menu>
            </div>

        );
    }
}

export default Burger