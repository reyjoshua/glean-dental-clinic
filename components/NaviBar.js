import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NaviBar() {

	return (
	<Navbar className="navbar" expand="lg">
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="link">
                <Link href="/">
                    <a className="nav-link" role="button">Home</a>
                </Link>
                <Link href="/">
                    <a className="nav-link" role="button">About</a>
                </Link>
                <Link href="/">
                    <a className="nav-link" role="button">Contact</a>
                </Link>
                <Link href="/">
                    <a className="nav-link" role="button">Procedures</a>
                </Link>
		    </Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}  
