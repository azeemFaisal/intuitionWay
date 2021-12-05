import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.scss';
import Image from 'next/image';

const DropdownList = [
  {id:0,title:'Software Development',link:'/ourServices/softwareDevelopment'},
  {id:1,title:'Staff Augmentation',link:'/ourServices/staffAugmentation'},
  {id:2,title:'Training & Development',link:'/ourServices/softwareTraining'}
];

function SiteHeader(props) {

    const router = useRouter() 
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.header}>
        <Container>
        <Navbar.Brand onClick={()=> router.push('/')} className={styles.brand}>
          <Image src="/Initial_Logo.PNG" alt='logo' height={40} width={40}/>
          <div className="ml-2">INTUITION WAY</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=> router.push('/contact')}>Contact</Nav.Link>
            <Nav.Link onClick={()=> router.push('/aboutUs')}>About Us</Nav.Link>
            <NavDropdown title="Our Services" id="collasible-nav-dropdown">
              {DropdownList.map(item=>
              <NavDropdown.Item key={item?.id} onClick={()=> router.push(item?.link)}>
                {item?.title}
              </NavDropdown.Item>)}
            </NavDropdown>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default SiteHeader;