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
      <title>Glean Dental Clinic</title>
      </Head>
        <NaviBar />
            <Component {...pageProps} />
        <Footer />
    </React.Fragment>
  )
}

export default MyApp
