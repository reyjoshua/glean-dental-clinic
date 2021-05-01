import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Container, Col} from 'react-bootstrap';

export default function NaviBar() {

	return (
	<Navbar collapseOnSelect expand="sm" className="navbar">
        <Navbar.Brand href="/"><h1 className="text-white gdc">Glean Dental Clinic</h1></Navbar.Brand>
        <Container>
		  <Navbar.Toggle aria-controls="navbar-toggle" />
		  <Navbar.Collapse id="navbar-toggle">
		    <Nav className="link">
                <Nav.Link href="/" className="text-white">Home</Nav.Link>
                <Nav.Link href="/about" className="text-white">About</Nav.Link>
                <Nav.Link href="/procedures" className="text-white">Procedures</Nav.Link>
                <Nav.Link href="/contact" className="text-white">Contact</Nav.Link>
		    </Nav>
		</Navbar.Collapse>
        </Container>
	</Navbar>
	)
}  
