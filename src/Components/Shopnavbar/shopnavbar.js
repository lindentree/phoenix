import React from "react"
import { Container ,Navbar, Nav, Button } from 'react-bootstrap';
import { DropdownButton ,Dropdown } from 'react-bootstrap';
import  '../../../static/css/index.css';
// import { Link } from "gatsby";
export default function shopnavbar(props) {
    const logo = "ATHENA BOOKS";
  return (
  <div>
      <header  className="border-bottom">
          <Container>
          <Navbar expand="md"> 
            <Navbar.Brand href="/" className="ml-4">{logo}</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarResponsive"></Navbar.Toggle>
            <Navbar.Collapse id="navbarResponsive">
                <Nav as="ul"  className="ml-auto">
                    <Nav.Item as="li"  className="ml-4 mt-2 mb-2">
                        <DropdownButton  title="English" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="Spanish">Spanish</Dropdown.Item>
                            <Dropdown.Item eventKey="french">French</Dropdown.Item>
                        </DropdownButton>
                        {' '}
                    </Nav.Item>
                    <Nav.Item as="li"  className="ml-4 mt-2 mb-2">
                        <Button>Sign Up</Button>
                    </Nav.Item>
                    <Nav.Item as="li" className="ml-4 mt-2 mb-2">
                    <Button  href="/" type="submit"> Change Page</Button>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
       
      </header>
      
  </div>
  );
}
