import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

const linkStyle = {
  color: 'black'
};

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
      <Container>
        <Row>
          <Col>
            <address align='center'>
              <b><a href="http://www.middlebury.edu/ls" style={linkStyle}>Middlebury College Language School</a></b><br />
              Sunderland Language Center<br />
              14 Old Chapel Rd.<br />
              Middlebury, VT 05753<br />
              USA<br />
              <a href="mailto:languages@middlebury.eduu">languages@middlebury.edu</a>
              <br />
            </address>
          </Col>
          <Col>
            <address align='center'>
              <b><a href="https://www.alueducation.com/campuses/alu-rwanda/" style={linkStyle}>African Leadership University Rwanda</a></b><br />
              Kigali Heights<br />
              2nd Floor, KG 7 Ave<br />
              Kigali, Rwanda<br />
              <a href="mailto:info@alueducation.com">info@alueducation.com</a>
            </address>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Contact;
