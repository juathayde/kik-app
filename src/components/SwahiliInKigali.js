import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import MigrationImg from "./image_files/migration.jpg";

class SwahiliInKigali extends Component {
  render() {
    return (
      <div className="SwahiliInKigali" align="left">
      <Container align="left">
        <Row>
          <Col>
            <Media left href="migration">
              <Media object data-src={MigrationImg} alt="migration" />
            </Media>
            <Media body>
              <Media heading>1. Migration</Media>
            Many people speak Swahili because they learned it in the Swahili speaking-surrounding countries of Tanzania, DRC, Burundi, Kenya and Uganda. While reasons behind moving are diverse, migration was often precipitated by the search for better economic opportunity or the political unrest in the region.
            </Media>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>2. Business</h5>
              <p>Swahili has been called the lingua franca of trade in Rwanda. Oftentimes business people learn Swahili in order to better conduct business with Swahili speakers in other countries. This means that a lot of shop owners speak good Swahili.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>3. Community</h5>
              <p>Many people learn Swahili simply from talking to their Swahili-speaking neighbors. However, these people are not usually fluent in the language. Additionally, children oftentimes learn from their parents who were born or spent time in Tanzania, Kenya and the DRC. </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>4. Islam</h5>
              <p>Many Muslims (although not all) speak Swahili because it is the language used in mosques and religious schools. Moreover, many Muslims originate from the East African coast, where Swahili is frequently spoken.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Limits</h5>
              <p>Also heard that some of the muslims can only have religious conversations or basic ones and some of the business owners can only have business conversations because that is the vocabulary they have learned.</p>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default SwahiliInKigali;
