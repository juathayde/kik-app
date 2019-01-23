import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Contact extends Component {
  render() {
    return (
      <div className="Contact" align="center">
      <Container>
        <Row>
          <Col>
            <address align='left'>
              <b>Middlebury Center for Social Entrepreneurship</b><br />
              118 South Main St.<br />
              Middlebury, VT 05753<br />
              USA<br />
              <a href="mailto:innovationhub@middlebury.edu">innovationhub@middlebury.edu</a>
            </address>
          </Col>
          <Col>
            <address align='left'>
              <b> African Leadership Academy Rwanda</b><br />
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
