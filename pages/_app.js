import React from 'react';
import Head from 'next/head';
import {Container} from 'react-bootstrap';
import NaviBar from '../components/NaviBar';
import Footer from '../components/Footer';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Glean Dental Clinic</title>
      </Head>
        <NaviBar />
            <Component {...pageProps} />
        <Footer className="my-5"/>
    </React.Fragment>
  )
}

export default MyApp
