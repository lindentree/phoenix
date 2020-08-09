import React from "react";
import  'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form ,Row,Col, Button}  from 'react-bootstrap';
import Header from '../Components/Navbar/navbar';
import  '../../static/css/emergency.css';
import  '../../static/css/index.css';



const emergency = ()=>{

   
    return (
        <div>
        <Header></Header>
        <Container>
      

      <div className="contents">
          <div className="content-left ">
              <h5 className="text-center">How does this work?</h5>
              <img  className="imgstyle" src="https://dummyimage.com/190x190/8f888f/fff"/>
              <p id="howtext">By filling out the form, this site temporarily stores your contacts.
             </p>
              <p> Next time you select ‘Log In’ and input your number, 
                it will automatically send your code word to your contacts. </p>
              <p> After one time use, your information will be wiped and deleted.</p>
          </div>

          <div className="content-right">
          <h2 className="text-center mb-5">Set-up emergency contacts</h2>
          <p className="mb-5"> 
          When you create emergency contacts with us,
           your contacts will be immediately notified by text that you are in need of help the moment you log-in  
          </p>

          <div className="form">
            <Form>
                <Row className="mb-3">
                    <Col >
                    <label>Your Phone Number: (Your log-in user ID)</label>
                    <Form.Control className="input" type="contact" placeholder="Phone Number" />
                    </Col>
                </Row >
                <p>Emergency Contact 1*</p>
                <Row className="mb-3">
                    <Col>
                    <Form.Control type="contact" placeholder="Phone Number" />
                    </Col>
                <Col>                
                    <Form.Control name="email" type="email" placeholder="Email" />
                    </Col>
                </Row>
                <p>Emergency Contact 2*</p>
                <Row className="mb-5">
                    <Col>
                    <Form.Control type="contact" placeholder="Phone Number" />
                    </Col>
                <Col>
                
                    <Form.Control name="email" type="email" placeholder="Email" />
                    </Col>
                </Row>
                
                <Row className="mb-5">
                <a href="#" className="buttonc">Add another contact</a>
                </Row>
                <Row className="mb-5"> 
                <Col>
                <p> Your emergency code word (Please share this with your contacts):</p>
                    <Form.Control type="number" placeholder="Your personal code" />
                    <small> <a href="#" className="text-decoration-none">What is this for</a></small>
                    </Col>
                </Row>
                <Button className="submitbutton" href="setupcomplete">Submit</Button>
            </Form>
         </div>
          </div>
          
         
      </div>
      </Container>
      
        </div>
    );

}


export default emergency;