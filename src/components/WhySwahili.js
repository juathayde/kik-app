import React, { Component } from 'react';
import { Col, Container, Media, Row } from 'reactstrap';
import SwahiliTimeline from './image_files/swahili_timeline.jpg';
import SwahiliMap from './image_files/swahili_map.jpg';

const SwahiliMapStyle = {
  maxHeight: '400px',
  maxWidth: '400px',
  align: 'middle',
  borderRadius: '10px'
};

const SwahiliTimeLineStyle = {
  maxHeight: '600px',
  maxWidth: '600px',
  align: 'middle',
  borderRadius: '10px'
};


class WhySwahili extends Component {
  render() {
    return (
      <div>
      <Container align="left">
        <Row>
          <Media left href="">
            <Media src={SwahiliMap} style={SwahiliMapStyle} alt="SwahiliMap_img"/>
          </Media>
          <Col>
            <Media body>
            <p>Kiswahili is spoken by 140 million people in east, central,  and southern Africa, extending from northern Mozambique to southern Somalia. It is the Lingua Franca of the intergovernmental organization of the East African Community (EAC), a working language of the African Union and the lingua franca of the military in East Africa. Kiswahili is also extensively spoken in the African diaspora communities scattered throughout the globe.</p>
            <p>In Africa Kiswahili is spoken in Tanzania, Burundi, Congo (Kinshasa) Kenya, Mayotte, Mozambique, Rwanda, Somalia, South Africa, and Uganda. Elsewhere, it is spoken in the UAE, Oman, Europe  and the USA.</p>
            <p>Born along the East African coast, Kiswahili originates from a combination of Bantu languages, Arabic, Persian, German, Portuguese and English.</p>
            </Media>
          </Col>
        </Row>
        <br />
        <Row>
          <Col align='center'>
            <p align='left'>As Kiswahili has evolved over time, it has no specific time of birth. However, there are significant milestones in history that shed light on its complex evolution:</p>
            <img src={SwahiliTimeline} style={SwahiliTimeLineStyle} alt="SwahiliTimeline_img" />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default WhySwahili;
