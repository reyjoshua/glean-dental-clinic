import React from 'react';
import {Container} from 'react-bootstrap';
import NaviBar from '../components/NaviBar';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
        <NaviBar />
            <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
