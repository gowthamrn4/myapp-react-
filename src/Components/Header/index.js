import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header class="header-fixed">
                    <div class="header-limiter">
                        <h1><a href="#">CBT<span>chennai</span></a></h1>
                        <nav>
                            <a href="#">Home</a>
                            <a href="#" class="selected">Blog</a>
                            <a href="#">Pricing</a>
                            <a href="#">About</a>
                            <a href="#">Faq</a>
                            <a href="#">Contact</a>
                        </nav>
                    </div>
                </header>
                <div class="header-fixed-placeholder"></div>
            </div>
        );
    }
}

export default Header;