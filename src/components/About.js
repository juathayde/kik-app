import React, { Component } from 'react';
import { Button, Col, Container, Jumbotron, Row } from 'reactstrap';


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
        </Row>
        <Jumbotron>
          <h1 className="display-3">Map of Kiswahili in Kigali</h1>
          <p className="lead">This is a joint project between Middlebury College and ALU Rwanda's students.</p>
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

export default About;
