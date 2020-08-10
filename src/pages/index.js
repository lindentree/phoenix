import React from "react";
import  'bootstrap/dist/css/bootstrap.min.css';
import {Container, CardDeck, Card, Button}  from 'react-bootstrap';
import Header from '../Components/Navbar/navbar';

export default function Home() {
  
  return ( 
  <div>
    <Header></Header>
    {/* Home page contents */}
    <div>
    <Container>
  <CardDeck className=" text-center">
  <Card className="border-0">
    <Card.Img variant="top" className="images"   src="https://dummyimage.com/190x190/8f888f/fff" />
    <Card.Body>
      <Card.Title> 
      <Button variant="primary" href="immediatehelp" size="lg">Immediate Help</Button>
    </Card.Title>
      <Card.Text>
      Find immediate resources to help you find local shelters and phone numbers you can call. 
      <div>
      <p className="text-muted">  <a href="">Learn more</a></p>
      </div>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="border-0">
    <Card.Img variant="top" className="images"  src="https://dummyimage.com/100x100/8f888f/fff" />
    <Card.Body>
      <Card.Title > 
        <Button variant="primary" size="lg"  href="emergencycontact">Emergency Contacts</Button></Card.Title>
      <Card.Text >
      When you create emergency contacts with us, your contacts will be immediately notified that you are in need of help the moment you log-in. 
      <div>
    <p className="text-muted">  <a href="">Learn more</a></p>
      </div>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>


{/* how this works ? */}
<div>
  <h3 className="text-center mt-5 mb-5">How does it work ?</h3>
<div className="how-works-layout">
<p className="grid-item grid-text">Select the button the top right hand corner to hide this page. 
We recommend using this site in incognito mode.</p>
<img className="grid-item images"   src="https://dummyimage.com/190x190/8f888f/fff" />
<p className="grid-item grid-text">Send a message to all of your emergency contacts all at once by selecting ‘Log In’
 if you or your loved ones feel threatened</p>
<img className="grid-item images"   src="https://dummyimage.com/190x190/8f888f/fff" />
</div>
</div>
<div>
<Button variant="primary" size="lg" className="buttonc mb-5">About Us</Button>
</div>
    </Container>
    </div>
  </div>
  );

}
