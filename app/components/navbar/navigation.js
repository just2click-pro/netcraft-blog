import React from "react";
import { BrowserRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navigation extends React.Component {
	render () {
		return (
			<BrowserRouter>
				<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle">
								<span className="sr-only">Toggle navigation</span>
								<label htmlFor="toggle-nav-mobile">
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</label>
							</button>
							<NavLink className="navbar-brand" exact to="/">Netcraft Academy</NavLink>
						</div>
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav">
								<li className="active"><NavLink to="/">Posts</NavLink></li>
								<li><NavLink to="/">Admin</NavLink></li>
							</ul>
						</div>
					</div>
				</nav>
			</BrowserRouter>
		)
	}
}

export default Navigation;

