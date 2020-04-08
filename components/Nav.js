import React from 'react';
import classnames from 'classnames'


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            headerHeight: null,
            aboutHeight: null,
            serviceHeight: null,
            priceHeight: null,
            photoHeight: null,
            contactHeight: null,
            footerHeight: null
        };
    }

    handleBoxes = () => {

        const header = document.getElementsByTagName('header')
        const about = document.getElementById('about')
        const service = document.getElementById('service')
        const contact = document.getElementById('contact')
        const footer = document.getElementsByTagName('footer')

        if (about) {
            this.setState({
                headerHeight: header.home.offsetHeight - 30,
                aboutHeight: header.home.offsetHeight - 30,
                serviceHeight: header.home.offsetHeight + about.offsetHeight - 30,
                priceHeight: header.home.offsetHeight + about.offsetHeight + service.offsetHeight - 30,
                photoHeight: header.home.offsetHeight + about.offsetHeight + service.offsetHeight + 700,
                contactHeight: header.home.offsetHeight + about.offsetHeight + service.offsetHeight + 820 + contact.offsetHeight - 30,
                footerHeight: header.home.offsetHeight + about.offsetHeight + service.offsetHeight + 858 + contact.offsetHeight + footer.offsetHeight - 30
            })
            
        }

    };

    handleScroll = () => {
    
        const currentScrollPos = window.pageYOffset;
        const visible = 400 > window.pageYOffset;
        this.setState({prevScrollpos: currentScrollPos, visible});
    };

    componentDidMount() {
        this.handleBoxes()
        window.addEventListener("scroll", this.handleScroll);
    }
    render() {
        return (
            <nav
                className={classnames("top-nav", {
                "top-nav--hidden": !this.state.visible
            })}>
                <ul className="desktop">
                    <li className="nav-item">
                        <a
                            className={classnames("nav-link anchor", {
                            "active": window.pageYOffset < this.state.headerHeight
                        })}
                            href='/'>Home</a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={classnames("nav-link anchor", {
                            "active": window.pageYOffset > this.state.headerHeight && window.pageYOffset < this.state.serviceHeight
                        })}
                            href='/#about'>Over Ons</a >
                    </li>
                    <li className="nav-item">
                        <a
                            className={classnames("nav-link anchor", {
                            "active": window.pageYOffset > this.state.serviceHeight && window.pageYOffset < this.state.priceHeight
                        })}
                            href='/#service'>Service</a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={classnames("nav-link anchor", {
                            "active": window.pageYOffset > this.state.priceHeight && window.pageYOffset < this.state.photoHeight
                        })}
                            href='/#prices'>Prijzen</a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={classnames("nav-link anchor", {
                            "active": window.pageYOffset > this.state.photoHeight && window.pageYOffset < this.state.contactHeight
                        })}
                            href='/#photo'>Foto's</a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={classnames("nav-link anchor", {
                            "active": window.pageYOffset > this.state.contactHeight
                        })}
                            href='/#contact'>Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav