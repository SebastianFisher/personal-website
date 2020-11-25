import React from 'react';
import onClickOutside from 'react-onclickoutside';
import "./Navbar.css";
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nav: ''
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    toggleNav() {
        this.setState(state => ({ nav: state.nav === '' ? ' nav-active' : '' }));
    }

    handleClickOutside() {
        this.toggleNav();
    }

    render() {
        return (
            <div className="nav">
                <div className="logo">
                    Sebastian Fisher
                </div>
                <ul className={`nav-links${this.state.nav}`}>
                    <Link to="./">
                        <li>Home</li>
                    </Link>
                    <Link to="./about">
                        <li>About</li>
                    </Link>
                    <Link to="./projects">
                        <li>Projects</li>
                    </Link>
                    <Link to="./contact">
                        <li>Contact</li>
                    </Link>
                </ul>
                <div className="burger" onClick={this.toggleNav}>
                    <div id="line1"></div>
                    <div id="line2"></div>
                    <div id="line3"></div>
                </div>
            </div>
        )
    }
}

export default onClickOutside(Navbar);