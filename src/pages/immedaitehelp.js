import React from "react";
import  'bootstrap/dist/css/bootstrap.min.css';
import {Container,Table, Button, Card}  from 'react-bootstrap';
import Header from '../Components/Navbar/navbar';
import data from '../../shelteinfo.json';
import  '../../static/css/immediate.css';
class immediate extends React.Component{

    constructor(props){
        super(props);
        this.state={
            latitude :null,
            longitude:null,
            address:null,
            contact : null,
            miles:null,
            name:null,
        }
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.getDistanceFromLatLonInKm = this.getDistanceFromLatLonInKm.bind(this);
        this.deg2rad = this.deg2rad.bind(this);

    }
    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCoordinates,this.handleError);
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      }
      getCoordinates(position){
             this.setState(
                 {
                     latitude:position.coords.latitude,
                     longitude :position.coords.longitude,
                 }
             )
      }

      deg2rad(deg) {
        return deg * (Math.PI/180)
      }
     getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        if(lat2 === 90.0000 && lon2 === 135.0000)
        {
            return "online service";
        }
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
        var dLon =this.deg2rad(lon2-lon1);
        var a =
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c; // Distance in km
        return Math.floor(d* 0.62137);
      }



    handleError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
           alert( "The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
           alert("An unknown error occurred.")
            break;
            default:
                alert("Please reload the page");
        }
      }


    render(){
        return (
            <div>
                 <Header></Header>

    {/* Home page contents */}
    <div>
    <Container >

      <div>
          <h2 className="text-center mt-5 mb-5">Immediate Help</h2>
          <h4 className="text-center mt-5 mb-5">Please call 911 immediately if this is an emergency</h4>
          <div>
              <div className=" buttongroup mt-5 mb-5">
                <Button className="button" onClick={this.getLocation}>Provide Location</Button>
              <Button variant="primary"  >Search Organisation </Button>
              </div>
              <div>
                <div className="organisationcards">
                {data.map( data => {
                        return(
                            <Card className="p-1 card text-left">
                            <Card.Title>
                           < span className="title">{data.name}</ span>
                            <span className="cardtext">
                              {this.getDistanceFromLatLonInKm(this.state.latitude,this.state.longitude,data.lat,data.long)} m</span>
                              </Card.Title>
                             <Card.Body className="p-0">
                               <p>{data.address}</p>
                               <p><a href="#">Get Directions</a> <span className="cardnum">  {data.contact}</span></p>
                            <p></p>

                            </Card.Body>
                            </Card>
                        )
                    })}
                </div>

              <Table striped bordered hover size="sm">

                <thead>
                    <tr>
                    <th>Organisation Name</th>
                    <th>Service Area</th>
                    <th>Service Type</th>
                    <th>Website</th>
                    <th>Phone Number</th>
                    <th>Miles</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map( data => {
                        return(
                            <tr>
                            <td>{data.name}</td>
                             <td>{data.locality}</td>
                             <td>{data.service_type}</td>
                             <td>{data.website}</td>
                            <td>{data.phone_number}</td>
                            <td >{this.getDistanceFromLatLonInKm(this.state.latitude,this.state.longitude,data.latitude,data.longitude)}</td>

                            </tr>
                        )
                    })}

                </tbody>
                </Table>
              </div>
          </div>
      </div>
      </Container>
      </div>


            </div>
        );
    }
}
export default immediate;