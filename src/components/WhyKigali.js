import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Image1 from './image_files/whyKigali1.jpg';
import Image2 from './image_files/whyKigali2.jpg';

const imgStyle = {
  maxHeight: '650px',
  maxWidth: '650px',
  align: 'middle',
  borderRadius: '18px'
}

const headerStyle = {
  borderRadius: '10px',
  backgroundColor: 'white',
  border: '2px solid gray'
}

class WhyKigali extends Component {
  render() {
    return (
      <Container align='center'>
      <Row>
        <Col sm="12" md={{ size: 6 , offset: 3 }}>
          <h4 style={headerStyle}>Why Learn Kiswahili in Kigali?</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={Image1} alt="" style={imgStyle} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} >
          <h4 style={headerStyle}>Why Learn Kiswahili at ALU?</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={Image2} alt="" style={imgStyle} />
        </Col>
      </Row>
      <br /><br /><br />
      </Container>
    );
  }
}

export default WhyKigali;
