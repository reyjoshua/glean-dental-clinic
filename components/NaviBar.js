import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NaviBar() {

	return (
	<Navbar className="navbar" expand="lg">
	  	<Link href="/">
              <a className="navbar-brand">Glean Dental Clinic</a>
        </Link>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="ml-auto">
                <Link href="/">
                    <a className="nav-link" role="button">Home</a>
                </Link>
                <Link href="/courses">
                    <a className="nav-link" role="button">About</a>
                </Link>
                <Link href="/courses">
                    <a className="nav-link" role="button">Contact</a>
                </Link>
                <Link href="/courses">
                    <a className="nav-link" role="button">Procedures</a>
                </Link>
		    </Nav>
		</Navbar.Collapse>
	</Navbar>
	)
} 
