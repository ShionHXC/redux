import React, { Component } from 'react';
import logoImg from "./logo.jpeg"

import "./Logo.css"
class Logo extends Component {
    render() {
        return (
            <div className="logo-wrapper">
                <img src={logoImg} alt="" />
            </div>
        );
    }
}

export default Logo;