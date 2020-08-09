import React from "react";
import  'bootstrap/dist/css/bootstrap.min.css';
import {Container,CardDeck , Card, Button}  from 'react-bootstrap';
import Header from '../Components/Navbar/navbar';

export default function Home() {
  
  return ( 
  <div>
    <Header></Header>
    {/* Home page contents */}
    <div>
    <Container>
      <p className="mt-5 mb-5 text-center" >
        Disclaimer: In case of an emergency, please call 911 immediately. This site does not replace emergency services.
      </p>

  <CardDeck className=" text-center">
  <Card className="border-0">
    <Card.Img variant="top"  src="https://dummyimage.com/100x100/8f888f/fff" />
    <Card.Body>
      <Card.Title> 
      <Button variant="primary" href="immedaitehelp" size="lg">Immediate Help</Button>
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
    <Card.Img variant="top" src="https://dummyimage.com/100x100/8f888f/fff" />
    <Card.Body>
      <Card.Title > <Button variant="primary" size="lg">Emergency Contacts</Button></Card.Title>
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
  <h2 className="text-center mt-5 mb-5">How does it work ?</h2>
<CardDeck className=" text-left">
  <Card className="border-0">
    <Card.Body className="instructioncards">
      <Card.Text>
      Select the button the top right hand corner to hide this page. We recommend using this site in incongnito mode.
    <img  className="ml-5" src="https://dummyimage.com/100x100/8f888f/fff"></img>
    </Card.Text>

    </Card.Body>
  </Card>
 
</CardDeck>
<CardDeck className=" text-left">
  <Card className="border-0">
    <Card.Body>
    
      <Card.Text>
      Send a message to all of your emergency contacts all at once by selecting ‘Log In’ if you or your loved ones feel threatened
      <img className="ml-auto pl-5" src="https://dummyimage.com/100x100/8f888f/fff"/>
      
      </Card.Text>

    </Card.Body>
  </Card>
 
</CardDeck>
</div>
<div className="buttonc mt-5">
<Button variant="primary" size="lg" className="text-center mb-5 ml-5">About Us</Button>
</div>
    </Container>
    </div>
  </div>
  );

}
