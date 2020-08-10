import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import  'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form ,Row,Col, Button}  from 'react-bootstrap';
import Header from '../Components/Navbar/navbar';
import  '../../static/css/emergency.css';
import  '../../static/css/index.css';
import phone from "../assets/phone.png"; 




const Emergency = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        
        axios.post('https://phoenix-server.xyz/api/sms', {
          params: {
            mobile_number: data.mobile_number,
            codeword: data.codeword 
          }
           
    
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(errors);
    }

   
    return (
        <div>
        <Header></Header>
        <Container>
      

      <div className="contents">
          <div className="content-left ">
              <h5 className="text-center">How does this work?</h5>
              <img  className="imgstyle" src={phone}/>
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <Form >
                <Row className="mb-3">
                    <Col >
                    <label>Your Phone Number: (Your log-in user ID)</label>
                    <Form.Control className="input" type="contact" placeholder="Phone Number" />
                    </Col>
                </Row >
                <p>Emergency Contact 1*</p>
                <Row className="mb-3">
                    <Col>
                    <Form.Control type="tel" placeholder="Mobile number" name="mobile_number" ref={register({required: true, minLength: 6, maxLength: 12})} />
                    </Col>
                {/* <Col>                
                    <Form.Control name="email" type="email" placeholder="Email" />
                    </Col> */}
                </Row>
                {/* <p>Emergency Contact 2*</p>
                <Row className="mb-5">
                    <Col>
                    <Form.Control type="tel" placeholder="Mobile number" name="mobile_number" ref={register({required: true, minLength: 6, maxLength: 12})} />
                    </Col>
                <Col>
                
                    <Form.Control name="email" type="email" placeholder="Email" />
                    </Col>
                </Row>
                 */}
           
                <Row className="mb-5"> 
                <Col>
                <p> Your emergency code word (Please share this with your contacts):</p>
                    <Form.Control type="text" placeholder="Your codeword" name="codeword" ref={register({required: true})} />
                    {/* <small> <a href="#" className="text-decoration-none">What is this for?</a></small> */}
                    </Col>
                </Row>
             
                <input type="submit" href="setupcomplete"/>
                   
            </Form>
         </form>
          </div>
          
         
      </div>
      </Container>
      
        </div>
    );

}


export default Emergency;