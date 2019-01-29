import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Image1 from './image_files/whyKigali1.JPG';
import Image2 from './image_files/whyKigali2.JPG';

var imgStyle = {
  maxHeight: '650px',
  maxWidth: '650px',
  align: 'middle',
}

class WhyKigali extends Component {
  render() {
    return (
      <Container align="center">
      <h4>Why Learn Kiswahili in Kigali?</h4>
      <img src={Image1} alt="" style={imgStyle} />
      <br />
      <br />
      <h4>Why Learn Kiswahili at ALU?</h4>
      <img src={Image2} alt="" style={imgStyle} />
      </Container>
    );
  }
}

export default WhyKigali;
