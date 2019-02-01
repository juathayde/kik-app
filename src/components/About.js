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
          <h5 className="display-4">Map of Kiswahili in Kigali</h5>
          <p className="lead"><b>Click on the Kiswahili neighborhoods to explore</b></p>
          <iframe title="KiswahiliMap" width='60%' height='400px' src='http://middlebury.maps.arcgis.com/apps/View/index.html?appid=edf83cac73f646438fa30de2d0a300a1&extent=29.6210,-2.1940,30.6097,-1.7061' frameborder='0' scrolling='no'></iframe>
          <hr className="my-2" />
          <h4  align="left" >Gikondo</h4>
          <p align="left">The Gikondo neighborhood (incorporating Kanserege, Kagunga and Kinunga cells) is home to a large Congolese population: indeed Kanserege, Gikondo is often referred to as “Camp Congo” in local parlance. In this central area there are many markets and salons where people speak Swahili, while the neighbouring residential cells offer potential homestay locations with Swahili-speaking Congolese families.</p>
          <h4 align="left">Nyamirambo</h4>
          <p align="left">Nyamirambo is known as the muslim neighborhood in Kigali. Most of the muslims living here originally immigrated from coastal Tanzania back in the late 1800s, acting as interpreters for German explorers into Rwanda. While the official administrative boundaries of Nyamirambo sector do not include the Biryogo, Rwampara and Rwezamenyo i) cells, most people refer to this whole Swahili-speaking area as part of the Nyamirambo neighborhood. The name Nyamirambo is sobering (it means “place of dead bodies” in reference to mass killings here during the 1994 genocide), and the government tried to change it, but local people rejected the change on the basis of needing to remember what happened. Despite its sombre name, Nyamirambo is one of the most vibrant and bustling areas of the city at all hours of the day and night: its streets are lined with mosques, restaurants, bars, clubs, fruit markets, tailor’s shops and organizations (including the Nyamirambo’s Women's Center), almost all of which regularly use Swahili as the language of business.</p>
          <h4 align="left">Cyvugiza</h4>
          <p align="left">Within the Southwest part of Nyamirambo lies Cyvugiza cell, a residential neighborhood where you can find many of the Burundian population in Kigali as well as bars and restaurants serving traditional Burundian food.</p>
        </Jumbotron>
      </Container>
      <Container>

      </Container>
      </div>
    );
  }
}

export default About;
