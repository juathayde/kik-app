import React, { Component } from 'react';
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
      <div className="WhyKigali" align="center">
      <img src={Image1} alt="" style={imgStyle} />
      <br />
      <img src={Image2} alt="" style={imgStyle} />
      </div>
    );
  }
}

export default WhyKigali;
