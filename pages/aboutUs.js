import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/AboutUs.module.scss';

function aboutUs(props) {
    return (
        <Container className={styles.aboutUsContainer}>
            <div className="headingH1">ABOUT US</div>
            <p>
            {`It is a Primitive Saga of Success while affirming ourselves. 
            We are an invincible entity in the Software Industry.
            The commencement Intuition Way Pvt. Ltd had been a well defined 
            coalesced thought of two friends to provide impeccable services to 
            our Customers within an unbeatable timeline along at competitive cost.
            The inception of our voyage was to change people's lives and uplift 
            businesses with our accelerating and innovative technology solutions 
            to fulfill the need of the hour of the Industries.`}
            </p>
           
        </Container>
    );
}

export default aboutUs;