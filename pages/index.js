import React from 'react';
import Banner from '../components/Banner';
import Highlights from '../components/Highlights';
import {Container, Col} from 'react-bootstrap';

export default function Home() {
        return (
        <React.Fragment>
            <Container className="my-5">
            <Banner/>
            </Container>
            <Highlights className="my-5" /> 
            </React.Fragment>
    )
}