import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Contact extends Component {
  render() {
    return (
      <div className="Contact">
      <Container>
        <Row>
          <Col>
            <address align='center'>
              <b>Middlebury College Language School</b><br />
              Sunderland Language Center<br />
              14 Old Chapel Rd.<br />
              Middlebury, VT 05753<br />
              USA<br />
              <a href="mailto:languages@middlebury.eduu">languages@middlebury.edu</a>
            </address>
          </Col>
          <Col>
            <address align='center'>
              <b> African Leadership University Rwanda</b><br />
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
