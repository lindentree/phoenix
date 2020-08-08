import React from "react"
import { Container ,Navbar, Nav, Button } from 'react-bootstrap';
import { DropdownButton ,Dropdown } from 'react-bootstrap';
// import { Link } from "gatsby";
export default function navbar(props) {
    const logo = "Peace";
  return (
  <div>
      <header>
          <Container>
          <Navbar expand="md" className="border-bottom"> 
            <Navbar.Brand href="/">{logo}</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarResponsive"></Navbar.Toggle>
            <Navbar.Collapse id="navbarResponsive">
                <Nav as="ul"  className="ml-auto">
                    <Nav.Item as="li">
                        <DropdownButton  title="English" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="Spanish">Spanish</Dropdown.Item>
                            <Dropdown.Item eventKey="french">French</Dropdown.Item>
                        </DropdownButton>
                        {' '}
                    </Nav.Item>
                    <Nav.Item as="li" className="ml-4">
                        <Button>Login</Button>
                    </Nav.Item>
                    <Nav.Item as="li"  className="ml-4">
                    <Button as="input" type="submit" value="Change Page" />
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
  </div>
  );
}
