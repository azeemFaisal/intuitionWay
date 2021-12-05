import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from './Carousel';

function Dashboard(props) {
    return (
        <Container fluid className="serviceContainer">
           {/* <Carousel /> */}
           <div className="headingH1">OUR MISSION</div>
            <p>
                {`Our purpose is to be a Global Player and serve multiple businesses
                 by innovative approaches to transform the World with help of 
                 Technology. Our powerful asset is our associates, they are 
                 closely working of continues chagrining the Business Needs and 
                 Languages. We are here to replace human dependencies by providing
                 the Artificially Intelligent Solutions. We are chasing a large 
                 amount of data to provide Insight Information. We are targeting
                 zero-in paper usage by Software Applications.  `}
            </p>
            <div className="headingH1">OUR VALUES</div>
            <p>
                {`Our core values had been intact while working with numerous Industry
                 giants by meeting their expectations and beating the timelines. The 
                 key differentiator of our company is quadra-focused belief, which 
                 helps us to keep ourselves motivated. The philosophy behind our 
                 values is to serve our clients in the best possible means along 
                 with respecting each other. `}
                 <ul>
                     <li>
                     <strong>Customer Centricity</strong> - We are the Customer Centric organization, 
                     where we help them to convert their strategic objectives into reality.
                     </li>
                     <li>
                     <strong>Complex to Simplex</strong> - We are here to solve the Complex business 
                     needs by providing Simple and Easy to use solutions.
                     </li>
                     <li>
                     <strong>Respect Change</strong> - We regard change happens in our surroundings 
                     like Business, Market Alteration, Government Norms and Community
                     as a whole.
                     </li>
                     <li>
                     <strong>Respect People</strong> - We are the believer of Inclusion and Diversity,
                     where all the Colleagues, Customers and Partners are supposed to 
                     accept them as they are.
                     </li>
                 </ul>
            </p>
        </Container>
    );
}

export default Dashboard;