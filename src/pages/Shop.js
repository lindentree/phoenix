import React from "react";
import  'bootstrap/dist/css/bootstrap.min.css';
import {Container,DropdownButton,ButtonGroup,Dropdown, Card, Button}  from 'react-bootstrap';
import Header from '../Components/Shopnavbar/shopnavbar';
import  '../../static/css/shop.css';
import data from '../../shopitems.json';
class Shop extends React.Component{
  constructor(props){
    super(props);
    this.state={
       title:null,
       author:null,
       price:null
    }
    

}
  
  render(){
    return (
      <div>
    <Header></Header>
    {/* Home page contents */}
    <div>
      <div className="banner">
        <h2>Top Sellers</h2>
      </div>
    <Container>
      <div className="shoppage">
      <div className="sidebar">
      <ButtonGroup vertical>
      <DropdownButton variant="outline-secondary" as={ButtonGroup} title="Category" className="DropdownButton" id="bg-vertical-dropdown-1" >
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
      <DropdownButton variant="outline-secondary" as={ButtonGroup} title="Places" className="DropdownButton" id="bg-vertical-dropdown-1" >
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
      <DropdownButton variant="outline-secondary" as={ButtonGroup} title="Age" className="DropdownButton" id="bg-vertical-dropdown-1" >
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
      <DropdownButton variant="outline-secondary" as={ButtonGroup} title="SALE" className="DropdownButton" id="bg-vertical-dropdown-1" >
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
     
  </ButtonGroup>
      </div>
      <div className="shopgrid">
       <div className ="gridtext">
       <p>TOP SELLERS </p>
        <small> 1 - 20 of 275 results</small>
       </div>
       <div className="gridelements">
        
           {data.map( data => {
                        return(
                          <div className="itemtext">
                          <img className="images"  src="https://dummyimage.com/100x100/8f888f/fff"></img>
                          <h6>{data.title}</h6>
                          <p>{data.autjhor}</p>
                          <small>{data.price}</small>
                          </div>
                        )
                    })}
            
          
        
       </div>
      </div>
      </div>
    </Container>
    </div>
    </div>

    )
  }
}

export default Shop;