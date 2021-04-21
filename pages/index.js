import React from 'react';
import Banner from '../components/Banner';
import Highlights from '../components/Highlights';
import {Container} from 'react-bootstrap';

export default function Home() {

    const data = {
        title: "Glean Dental Clinic",
        content: "Opportunities for everyone, everywhere!",
        destination:"/",
        label: "Inquire Now!"
    }

    return (
        <React.Fragment>
            <Container className="my-5">
            <Banner data={data}/>
            </Container>
            <Highlights className="my-5" /> 
        </React.Fragment>
    )
}