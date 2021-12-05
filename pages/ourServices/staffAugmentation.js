import React from 'react';
import { Container } from 'react-bootstrap';

function staffAugmentation(props) {
    return (
        <Container className="serviceContainer">
            <div className="headingH1">STAFF AUGMENTATION</div>
            <p>
                {` Our staff augmentation services comprise of On-Roll as well as
                Off-Roll employment. So far, we are serving multiple clients majorly
                into the IT Industry by our faster turnaround, higher conversion rate 
                and quality resources. Our human resource database is apt to fulfill 
                most of the requirements ranging from junior to senior level associates.
                Our dedicated recruitment team is well trained to meet the requirements 
                such as Software Developers, SMEs, Project Managers, Scrum Masters, 
                Product Owners, Business Analysts, Testers for the various industries 
                like Banking, Insurance, Hospitality, FMCG and others. We leverage our 
                customers by sourcing technocrats for technologies like .Net, Java, 
                Cloud Computing, IoT, Blockchain, AWS and many more.`}
            </p>
        </Container>
    );
}

export default staffAugmentation;