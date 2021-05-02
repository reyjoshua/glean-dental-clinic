import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Container, Col} from 'react-bootstrap';

export default function NaviBar() {

	return (
		<Navbar className="navbar" expand="lg">
		<Navbar.Brand href="/" ><h3 className="gdc text-white">Glean Dental Clinic</h3></Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
		  <Nav className="mr-auto">
			<Nav.Link href="/" className="text-white">Home</Nav.Link>
			<Nav.Link href="/about" className="text-white">About</Nav.Link>
			<Nav.Link href="/procedures" className="text-white">Procedures</Nav.Link>
			<Nav.Link href="/contact" className="text-white">Contact</Nav.Link>
		  </Nav>
		</Navbar.Collapse>
	  </Navbar>
	)
}  
