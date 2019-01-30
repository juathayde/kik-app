import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MiddLogo from './image_files/midd_logo.png';
import ALUBanner from './image_files/alu_banner.png';

const linkStyle = {
  color: 'black'
};

var bannerStyle = {
  maxHeight: '85px',
  maxWidth: '300px',
  align: 'middle',
  margin: '15px'
};

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
      <Container>
        <Row>
          <Col>
            <address align='center'>
              <img src={MiddLogo} style={bannerStyle} alt=" "></img><br />
              <b><a href="http://www.middlebury.edu/ls" style={linkStyle}>Middlebury College Language School</a></b><br />
              Sunderland Language Center<br />
              14 Old Chapel Rd.<br />
              Middlebury, VT 05753, USA<br />
              <a href="mailto:languagesmiddlebury.eduu">languages@middlebury.edu</a>
              <br />
            </address>
          </Col>
          <Col>
            <address align='center'>
              <img src={ALUBanner} style={bannerStyle} alt="" /><br />
              <b><a href="https://www.alueducation.com/campuses/alu-rwanda/" style={linkStyle}>African Leadership University Rwanda</a></b><br />
              Kigali Heights<br />
              2nd Floor, KG 7 Ave<br />
              Kigali, Rwanda<br />
              <a href="mailto:info@alueducation.com">info@alueducation.com</a>
            </address>
          </Col>
        </Row>
      </Container>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}

export default Contact;
