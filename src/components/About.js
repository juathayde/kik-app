import React, { Component } from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';
import KiKLogo from './image_files/kik-logo.png';

const imgStyle = {
  maxHeight: '200px'
}

class About extends Component {
  render() {
    return (
      <div className="About" align="center">
      <Container align="left">
        <Row>
          <Col>
            <h4>Methods</h4>
              <p>Over the course of four weeks under the supervision of Professor Nadia Horning, Middlebury and ALU students collaborated to design a research project, conduct fieldwork, and analyze data to identify areas where Kiswahili students could practice Kiswahili in and around Kigali.</p>
              <p>Data collection relied heavily on interviews conducted in English, French, Kiswahili, and Kinyarwanda throughout different Kigali communities. Conducting fieldwork in small groups, students whittled down a list of 30 communities into 4 ‘hotspot’ neighborhoods where Kiswahili is spoken by at least 50% of residents. Once Kiswahili-speaking neighborhoods were  identified, students investigated opportunities to practice their target language outside the classroom. Restaurants, bars and other places of entertainment, schools, places of worship, shops, and alternative opportunities for social interaction were identified.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Participants</h4>
              <p>The KiK team included the following students:</p>
              <p>Heather Cox, Veronica Estudillo, Joshua Joseph, Lenga Kutwa, Pamella Kyomugisha, Violet Low-Beinart, Alice Magaka, Allan Muhizi, Joshua Niyobuhungiro, Zorica Radanovic, Julia S de Athayde Silva, Mariejoe Uwimana, and Martin Wairimu.</p>
          </Col>
          <Col align='center'>
            <img src={KiKLogo} style={imgStyle} alt="" />
          </Col>
        </Row>
        <br />
        <Jumbotron align='center'>
          <h1 className="display-3">Map of Kiswahili in Kigali</h1>
          <p className="lead">This is a joint project between Middlebury College and ALU Rwanda's students.</p>
          <iframe title="KiswahiliMap" width='75%' height='400px' src='http://middlebury.maps.arcgis.com/apps/View/index.html?appid=edf83cac73f646438fa30de2d0a300a1&extent=29.6210,-2.1940,30.6097,-1.7061' frameborder='0' scrolling='no'></iframe>
          <hr className="my-2" />
          <p>Additional Info About Map</p>
        </Jumbotron>
      </Container>
      <Container>

      </Container>
      </div>
    );
  }
}

export default About;
