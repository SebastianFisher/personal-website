import React from 'react';
import onClickOutside from 'react-onclickoutside';
import "./Navbar.css";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nav: '',
            links: ["home", "about", "projects", "contact"],
            animation: '',
            burgerToggle: ''
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    toggleNav() {
        this.setState(state => {
            let nav = '';
            let animation = '';
            let burgerToggle = '';
            if (state.nav === '') {
                nav = 'nav-active';
                animation = 'in';
                burgerToggle = 'toggle';
            }
            return {
                nav,
                animation,
                burgerToggle
            }
        });
    }

    handleClickOutside() {
        this.setState({ nav: '', animation: '', burgerToggle: '' });
    }

    render() {
        const links = this.state.links.map((link, index) => {
            const numLinks = this.state.links.length;
            let animation;
            if (this.state.animation === 'in') {
                animation = `navIn 0.5s ease forwards ${index / (numLinks + 4) + 0.3}s`;
            }
            let destination;
            if (link === 'home') {
                destination = './';
            } else {
                destination = `./${link}`;
            }

            return (
                <Link to={destination}>
                    <li key={link} style={{ animation }}>{link}</li>
                </Link>
            )
        });

        return (
            <div className="nav">
                <div className="logo">
                    Sebastian Fisher
                </div>
                <ul className={`nav-links ${this.state.nav}`}>
                    {links}
                </ul>
                <div className={`burger ${this.state.burgerToggle}`} onClick={this.toggleNav}>
                    <div id="line1"></div>
                    <div id="line2"></div>
                    <div id="line3"></div>
                </div>
            </div>
        )
    }
}

export default onClickOutside(Navbar);