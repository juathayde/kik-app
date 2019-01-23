import React, { Component } from 'react';
import MapContainer from './Map.js';
import { Button, Jumbotron, Container, Row, Col } from 'reactstrap';

class Resources extends Component {
  render() {
    return (
      <div className="Resources" align="center">
      <Container>
        <MapContainer />
        <h4><b>Organizations</b></h4>
        <Jumbotron>
          <h1 className="display-3">Kiswahili in Kigali</h1>
          <p className="lead">This project is a culmination of a partnership between Middlebury College's social entrepreneurship and ALU Rwanda's students.</p>
          <hr className="my-2" />
          <p>Special thanks to Middlebury College's Associate Professor of Political Science Nadia Horning, ALU Rwanda, etc.</p>
          <p className="lead">
            <Button color="primary">About KiK</Button>
          </p>
        </Jumbotron>
      </Container>
      </div>
    );
  }
}

export default Resources;
