import React from "react";
import {Link} from "react-router-dom";
// components
// custom imports



export const Navbar = (props) => {
	return (
		<nav className="navbar navbar-dark">
		  <div className="container-fluid">
		    {props.children}
		  </div>
		</nav>
	)

}



export const Header = () => {
	return(
		<>
			<Navbar> 
				<Link className="navbar-brand" to="/">Dapplu</Link>
				<div className="d-flex mx-4" >
					<Link className="nav-link text-white me-4" to="/network">Network</Link>
					<a className="btn btn-sm btn-primary my-auto" href="https://app.dapplu.com/">Use Dapplu</a>
				</div>
			</Navbar>


			
		</>
	);
}

export default Header;