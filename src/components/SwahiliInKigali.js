import React, { Component } from 'react';
import { Button, Container, Row, Col, Media, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import MigrationImg from "./image_files/migration.png";
import BusinessImg from "./image_files/business.png";
import CommunityImg from "./image_files/community.png";
import IslamImg from "./image_files/islam.png";

var imgStyle = {
  maxHeight: '128px',
  maxWidth: '128px',
};

const conStyle = {
  margin: '40px',
  border: '5px solid gray'
};

class SwahiliInKigali extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      //activeModal: null,
    };

    // this.clickHandler = this.clickHandler.bind(this);
    // this.hideModal = this.hideModal.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  // clickHandler(e, index) {
  //   this.setState({ activeModal: index })
  // }
  //
  // hideModal() {
  //     this.setState({ activeModal: null })
  // }

  render() {
    return (
      <div>
        <Container align="left" style={conStyle}>
          <Row>
            <Media left href="migration">
              <Media src={MigrationImg} style={imgStyle} alt="migration_img" />
            </Media>
            <Col>
              <Media body>
                <Media heading>Migration</Media>
                Many people speak Swahili because they learned it in the Swahili speaking-surrounding countries of Tanzania, DRC, Burundi, Kenya and Uganda. While reasons behind moving are diverse, migration was often precipitated by the search for better economic opportunity or the political unrest in the region.
              </Media>
              <br />
              <Button color="link" onClick={this.toggle}>Click here for interview</Button>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }} toggle={this.toggle}>
                  <ModalHeader toggle={this.toggle}>Interview with Allen’s uncle</ModalHeader>
                  <ModalBody>
                  Allen’s Uncle owns and runs three bars in Kigali along with a number of side projects. He speaks Congolese Swahili fluently because he spent the first 18 years of his life in the Kivu region of the Congo. Although Allen’s Uncle’s parents are Rwandan, they fled with his grandparents to the Congo during the 1950s due to the first waves of ethnic violence. Allen’s uncle returned to Rwanda in 1998 and now frequently travels to Kenya, Tanzania, and Uganda for business where he uses Swahili frequently. He now says that he understands the great value of learning other languages and is excited about the prospect of the Middlebury language school.                   </ModalBody>
              </Modal>
            </Col>
          </Row>
        </Container>
        <Container align="left" style={conStyle}>
          <Row>
            <Media left href="business">
              <Media src={BusinessImg} style={imgStyle} alt="business_img" />
            </Media>
            <Col>
              <Media body>
                <Media heading>Business</Media>
                Swahili has been called the lingua franca of trade in Rwanda. Oftentimes business people learn Swahili in order to better conduct business with Swahili speakers in other countries. This means that a lot of shop owners speak good Swahili.
              </Media>
            </Col>
            </Row>
          </Container>
          <Container align="left" style={conStyle}>
            <Row>
              <Media left href="community">
                <Media src={CommunityImg} style={imgStyle} alt="community_img" />
              </Media>
              <Col>
                <Media body>
                  <Media heading>Community</Media>
                  Many people learn Swahili simply from talking to their Swahili-speaking neighbors. However, these people are not usually fluent in the language. Additionally, children oftentimes learn from their parents who were born or spent time in Tanzania, Kenya and the DRC.
                </Media>
              </Col>
            </Row>
          </Container>
          <Container align="left" style={conStyle}>
            <Row>
              <Media left href="islam">
                <Media src={IslamImg} style={imgStyle} alt="islam_img" />
              </Media>
              <Col>
                <Media body>
                  <Media heading>Islam</Media>
                  Many Muslims (although not all) speak Swahili because it is the language used in mosques and religious schools. Moreover, many Muslims originate from the East African coast, where Swahili is frequently spoken.
              </Media>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SwahiliInKigali;
