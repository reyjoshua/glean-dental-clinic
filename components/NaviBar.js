import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NaviBar() {

	return (
	<Navbar className="navbar" variant="light" expand="lg">
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
            <a href="#" className="navbar-brand"> 
                <span className="font-weight-bold text-white"><h1>Glean Dental Clinic</h1></span>
            </a>
		    <Nav className="link">
                <Link href="/">
                    <a className="nav-link text-white" role="button">Home</a>
                </Link>
                <Link href="/about">
                    <a className="nav-link text-white" role="button">About</a>
                </Link>
                <Link href="/procedures">
                    <a className="nav-link text-white" role="button">Procedures</a>
                </Link>
                <Link href="/contact">
                    <a className="nav-link text-white" role="button">Contact</a>
                </Link>
		    </Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}  
