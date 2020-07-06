import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeliveryService from '../services/DeliveryService';


class TopNavbar extends Component {
    render() {
        return (
            <nav className="bg-dark  pt-5 ">
                <Link to="/" className=" pl-3 text-light shift ">Home</Link>
                <Link to="/" className="pl-3  text-light" >About Us</Link>
                <Link to="/services" className="pl-3  text-light" >Services</Link>
                <Link to="/" className="pl-3  text-light">Career</Link>

                <Link to="/" className="pl-3  text-light">Contact Us</Link>
            </nav>
        )
    }

}

export default TopNavbar;