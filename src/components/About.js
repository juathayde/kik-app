import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MiddBanner from './image_files/midd_banner.png';
import ALUBanner from './image_files/alu_banner.png';
import GroupImg from './image_files/group_photo.JPG';

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
              <p>In 2017, President Paul Kagame declared that Swahili would soon become one of Rwanda’s official languages.  While many do not include Rwanda amongst Swahili speaking countries, a cohort of ALU and Middlebury students collaborating in January of 2019 found that this is not exactly the case. In fact, Kigali hosts a burgeoning Swahili speaking community and is ripe for the founding of the Middlebury school of Swahili in the summer of 2020.</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h4>Study Overview</h4>
              <p>In preparation for the program, five Middlebury students and eight African Leadership University students collaborated in January of 2019 to investigate where, how, and why Swahili is spoken in various places and to various degrees in Kigali.  During the study, the students designed a research project, conducted fieldwork, analyzed collected data and created this digital narrative to highlight the growing proliferation of Swahili in Kigali and provide resources for future students of Swahili.</p>
          </Col>
          <Col>
            <h4>Methods</h4>
              <p>The methods used in this study focus heavily on interviews conducted in English, French, Swahili and Kinyarwanda throughout different communities in Kigali. Conducting fieldwork in small groups, students whittled down a list of 30 communities into 4 ‘hotspot’ neighborhoods where Swahili was spoken by over 50% of residents. Once identified, students discovered different bars, restaurants and activities around those areas where future language students could engage their developing Swahili language skills outside of the classroom.</p>
          </Col>
          <Col>
            <h4>Participants</h4>
              <p>Under Professor Nadia Horning's supervision, the following students participated in this study:</p>
              <p>Heather Cox, Veronica Estudillo, Joshua Joseph, Lenga Kutwa, Pamella Kyomugisha, Violet Low-Beinart, Alice Magaka, Allan Muhizi, Joshua Niyobuhungiro, Zorica Radanovic, Julia S de Athayde Silva, Mariejoe Uwimana, and Martin Wairimu.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={GroupImg} alt="" style={imgStyle}/>
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
            <h4>Middlebury Language School's Mission Statement:</h4>
              <p>“The Middlebury Language Schools welcome students from all walks of life and all parts of the global community. We provide expert education in languages and cultures through innovative, immersive instruction and the demonstrated effectiveness of the Language Pledge to enhance linguistic excellence and intercultural understanding.”</p>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default About;
