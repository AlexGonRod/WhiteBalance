import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchWithRouter from '../header/search'
import './styles/main.css';


function Header(props) {

	return (

		<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
			<NavLink id="logo" className="nav-link" to="/user">WhiteBalance</NavLink>
			<button className="navbar-toggler" type="button" data-toggle="dropdown" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<i className="far fa-user"></i>
			</button>

			<div className="collapse navbar-collapse">
				<ul className="navbar-nav">
					<li className="nav-item" />
					<NavLink id="follow" className="nav-link" to="/following">Following</NavLink>
				</ul>
            
				<SearchWithRouter />
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<NavLink id="follow" className="nav-link" to="/upload"><i className="fas fa-cloud-upload-alt"></i></NavLink>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i className="far fa-bell"></i><span className="badge">4</span>
						</a>
						<div className="dropdown-menu dropdown-menu-right" id="navbarSupportedContent" aria-labelledby="navbarDropdown">
							<a className="dropdown-item">Action</a>
							<a className="dropdown-item">Another action</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item">Something else here</a>
						</div>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i className="far fa-user"></i>
						</a>
						<div className="dropdown-menu dropdown-menu-right" id="navbarSupportedContent" aria-labelledby="navbarDropdown">
							<NavLink id="follow" className="nav-link" to="/">Profile</NavLink>
							<NavLink id="follow" className="nav-link" to="/account">Settings</NavLink>
						</div>
					</li>
				</ul>

			</div>
		</nav >

	);

}


export default Header;
