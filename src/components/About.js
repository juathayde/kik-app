import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MiddBanner from './image_files/midd_banner.png';
import ALUBanner from './image_files/alu_banner.png';


var bannerStyle = {
  maxHeight: '128px',
  maxWidth: '490px',
  align: 'middle',
};

var imgStyle = {
  maxHeight: '800px',
  maxWidth: '1150px',
  align: 'center',
};

class About extends Component {
  render() {
    return (
      <div className="About" align="center">
      <Container align="left">
        <Row>
          <Col>
            <h4>Introduction</h4>
              <p>Despite being internationally renowned for its rigorous and diverse foreign language instruction programs, Middlebury College has never before offered an immersive course in a native African language. In an effort to address this conspicuous lacuna, the college plans to open a Middlebury School of Kiswahili in summer 2020 at the African Leadership University in Kigali, Rwanda.
              In preparation for  this new language program, a team of 5 Middlebury students and 8 ALU students collaborated to investigate where, how, and why Kiswahili is spoken in various places and to various degrees in Kigali.</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h4>Methods</h4>
              <p>Over the course of  four weeks under the supervision of Professor Nadia Horning, Middlebury and ALU students collaborated to design a research project, conduct fieldwork, and analyze data to identify areas where Kiswahili students could practice Kiswahili in and around Kigali.</p>
              <p>Data collection relied heavily on interviews conducted in English, French, Kiswahili, and Kinyarwanda throughout different Kigali communities. Conducting fieldwork in small groups, students whittled down a list of 30 communities into 4 ‘hotspot’ neighborhoods where Kiswahili is spoken by at least 50% of residents. Once Kiswahili-speaking neighborhoods were  identified, students investigated opportunities to practice their target language outside the classroom. Restaurants, bars and other places of entertainment, schools, places of worship, shops, and alternative opportunities for social interaction were identified.</p>
          </Col>
          <Col>
            <h4>Participants</h4>
              <p>The KiK team included the following students:</p>
              <p>Heather Cox, Veronica Estudillo, Joshua Joseph, Lenga Kutwa, Pamella Kyomugisha, Violet Low-Beinart, Alice Magaka, Allan Muhizi, Joshua Niyobuhungiro, Zorica Radanovic, Julia S de Athayde Silva, Mariejoe Uwimana, and Martin Wairimu.</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col align="center">
            <h3>Institutions</h3>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
              <img src={MiddBanner} alt="midd_image" style={bannerStyle} />
              <p><b>Middlebury College</b> is a liberal arts college located in Middlebury, Vermont in the United States. Since its founding in 1800, Middlebury College has focused on its educational mission to prepare students to face the world’s most challenging problems. In addition to being a prominent liberal arts college, Middlebury College is also home to the internationally recognized <a href="http://www.middlebury.edu/ls">summer language schools</a> with 38 sites in various regions around the world.</p>
          </Col>
          <Col>
            <img src={ALUBanner} alt="alu_image" style={bannerStyle} />
             <p><b>The African Leadership University (ALU)</b> is a network of prominent educational institutions whose mission is to produce three million African leaders over the next 50 years. ALU provides an innovative educational approach in addressing Africa’s greatest challenges by empowering students to take ownership of their own learning. In September 2017, ALU opened its second campus in Kigali, Africa’s safest and most innovative East African city.</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col align="center">
            <h4>Middlebury Language Schools' Mission Statement:</h4>
              <p>“The Middlebury Language Schools welcome students from all walks of life and all parts of the global community. We provide expert education in languages and cultures through innovative, immersive instruction and the demonstrated effectiveness of the Language Pledge to enhance linguistic excellence and intercultural understanding.”</p>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default About;
