import React from "react"
import { Container ,Navbar, Nav, Button } from 'react-bootstrap';
import { DropdownButton ,Dropdown } from 'react-bootstrap';
import  '../../../static/css/index.css';
// import { Link } from "gatsby";
export default function navbar(props) {
    const logo = "Peace";
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
                        <Button>Login</Button>
                    </Nav.Item>
                    <Nav.Item as="li" className="ml-4 mt-2 mb-2">
                    <Button as="input" type="submit" value="Hide Page" />
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
       
      </header>
      <p className="mt-5 mb-5 text-center disclaimer" >
        Disclaimer: In case of an emergency, please call 911 immediately. This site does not replace emergency services.
      </p>
  </div>
  );
}
