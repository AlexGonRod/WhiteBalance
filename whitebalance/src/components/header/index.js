import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './styles/main.css'


function Header(props) {
    
    return (

            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <NavLink id="logo" className="nav-link" to="/user">WhiteBalance</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="dropdown" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="far fa-user"></i>
                </button>

                <div className="collapse navbar-collapse">
                    
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-cloud-upload-alt"></i></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><i className="far fa-bell"></i><span className="badge">4</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="far fa-user"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" id="navbarSupportedContent" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>

        );

    }


export default Header
