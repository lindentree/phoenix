import React from "react";
import  'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button}  from 'react-bootstrap';
import Header from '../Components/Navbar/navbar';
import  '../../static/css/setupcomplete.css';
import  '../../static/css/index.css';



const setup = ()=>{

   
    return (
        <div>
        <Header></Header>
        <Container>
     
      <div className="layout">
          <div className="card-right">
          <h2 className="text-center mb-4">Your emergency contacts are set-up</h2>
          <p className="mb-3"> 
          If you feel like you are in immediate danger, please call 911. 
          </p>
          <p className="mb-5"> 
           To send the distress message, select 
          the log-in and input your number. Your contacts will be immediately notified by text that you are in need of help.
          </p>

          <div>
              <h4>Additional information</h4>
              <div className="webtext">
         <p> You can hide this page by selecting
             <Button size="sm" className="ml-2 mr-2">Hide Page</Button>
               on the top right hand corner</p>
              </div>
              <div  size="sm" className="mobiletext">
             <Button  className="ml-1 mr-1">Hide Page</Button>
             <p>You can hide this page by selecting this symbol on the top right hand corner</p>
              </div>
             
          </div>
          </div>
        
          <div className="card-left ">
              <h5 className="text-center">How does this work?</h5>
              <img  className="imgstyle" src="https://dummyimage.com/190x190/8f888f/fff"/>
              <p id="howtext">By filling out the form, this site temporarily stores your contacts.
             </p>
              <p> Next time you select ‘Log In’ and input your number, 
                it will automatically send your code word to your contacts. </p>
              <p> After one time use, your information will be wiped and deleted.</p>
          </div>
          

         
      </div>
      </Container>
      
        </div>
    );

}


export default setup;