import { Container } from 'react-bootstrap';
import styles from '../styles/Contact.module.css';

const Contact = (props) => 
        <Container className={styles.contactContainer}>
            <div className={styles.contactHeading}>
                <strong>Contact US at</strong>
                <p>
                    +91-9971201089
                </p>
            </div>
        </Container>
    
export default Contact;