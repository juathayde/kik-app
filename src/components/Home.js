import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Slider from './Slider.js';
import MiddLogo from './image_files/midd_logo.png';
import ALUBanner from './image_files/alu_banner.png';

var bannerStyle = {
  maxHeight: '85px',
  align: 'middle',
  margin: '15px'
};

const HomeContent = (props) => {
  return (
    <div>
      <Slider />
      <br />
      <Container align="left">
        <Row>
          <Col align='center'>
            <h3>Introduction</h3>
              <p>Despite being internationally renowned for its rigorous and diverse foreign language instruction programs, Middlebury College has never before offered an immersive course in a native African language. In an effort to address this conspicuous lacuna, the college plans to open a Middlebury School of Kiswahili in summer 2020 at the African Leadership University in Kigali, Rwanda.
              In preparation for  this new language program, a team of 5 Middlebury students and 8 ALU students collaborated to investigate where, how, and why Kiswahili is spoken in various places and to various degrees in Kigali.</p>
          </Col>
        </Row>
        <Row>
          <Col align="center">
            <h3>Institutions</h3>
            <br />
          </Col>
        </Row>
        <Row>
          <Col align="center">
              <img src={MiddLogo} alt="midd_image" style={bannerStyle} />
              <p align="left"><b>Middlebury College</b> is a liberal arts college located in Middlebury, Vermont in the United States. Since its founding in 1800, Middlebury College has focused on its educational mission to prepare students to face the world’s most challenging problems. In addition to being a prominent liberal arts college, Middlebury College is also home to the internationally recognized <a href="http://www.middlebury.edu/ls">summer language schools</a> with 38 sites in various regions around the world.</p>
          </Col>
          <Col align="center">
            <img src={ALUBanner} alt="alu_image" style={bannerStyle} />
            <p align="left"><b>The African Leadership University (ALU)</b> is a network of prominent educational institutions whose mission is to produce three million African leaders over the next 50 years. ALU provides an innovative educational approach in addressing Africa’s greatest challenges by empowering students to take ownership of their own learning. In September 2017, ALU opened its second campus in Kigali, Africa’s safest and most innovative East African city.</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col align="center">
            <h3>Middlebury Language Schools' Mission Statement</h3>
              <p>“The Middlebury Language Schools welcome students from all walks of life and all parts of the global community. We provide expert education in languages and cultures through innovative, immersive instruction and the demonstrated effectiveness of the Language Pledge to enhance linguistic excellence and intercultural understanding.”</p>
          </Col>
        </Row>
      </Container>
      <br /><br />
    </div>
  );
};

export default HomeContent;
