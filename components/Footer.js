import React from 'react'
import styled from 'styled-components'
import {Row, Col} from 'react-bootstrap'
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Grid } from "@material-ui/core";
import { socialMedia } from "../data/socialMedia";


function Footer() {
  
  const { instagram, facebook, linkedin } = socialMedia;
  return (
    <div className="footerSection">
      <h5>&copy; Glean Dental Clinic | 2021</h5>
      <p>All Rights Reserved</p>
      <Grid item container spacing={2} justify="center">
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={facebook}
      >
        <FacebookIcon/>
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={instagram}
      >
        <InstagramIcon/>
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={linkedin}
      >
        <LinkedInIcon/>
      </Grid>
    </Grid>
    </div>
  )
}

export default Footer
