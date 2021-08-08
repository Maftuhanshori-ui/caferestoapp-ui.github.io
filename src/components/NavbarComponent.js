import React, { Component } from 'react'
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";



export default class NavbarComponent extends Component {
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-lg" >
                <div class="container">
                    <a class="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: "#000" }} />
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Nav.Link class="nav-link" as={Link} to="/">Home <span class="sr-only">(current)</span></Nav.Link>
                            </li>
                            <li class="nav-item">
                                <Nav.Link class="nav-link" as={Link} to="/menu">Menu</Nav.Link>
                            </li>
                            <li class="nav-item">
                                <Nav.Link class="nav-link" as={Link} to="/contact">Contact</Nav.Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        );
    }
}
