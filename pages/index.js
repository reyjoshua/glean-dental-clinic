import React from 'react';
import Banner from '../components/Banner';
import Highlights from '../components/Highlights';
import About from '../components/About';
import Contact from '../components/Contact';
import {Container} from 'react-bootstrap';

export default function Home() {
        return (
        <React.Fragment>
            <Container className="my-5">
            <Banner/>
            </Container>
            <About className="my-5" />
            <Highlights className="my-5" /> 
            <Contact/> 
            </React.Fragment>
    )
}