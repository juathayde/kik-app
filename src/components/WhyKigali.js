import React, { Component } from 'react';
import image from './whyKigali.png';
import { Container } from 'reactstrap';


//full page
class WhyKigali extends Component {
  render() {
    return (
      <div className="WhyKigali" align="center">
      <img src={image} alt=""/>
      </div>
    );
  }
}

export default WhyKigali;