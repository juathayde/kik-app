import React, { Component } from 'react';
import { Button, Container, Row, Col, Media, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MigrationImg from "./image_files/migration.png";
import BusinessImg from "./image_files/business.png";
import CommunityImg from "./image_files/community.png";
import IslamImg from "./image_files/islam.png";
import Luc from './image_files/Luc.JPG';
import Kubwayo from './image_files/Kubwayo.JPG';

var imgStyle = {
  maxHeight: '128px',
  maxWidth: '128px',
};

var imgInterviewStyle = {
  maxHeight: '250px',
  maxWidth: '300px',
};

const conStyle = {
  margin: '40px',
  border: '5px solid gray'
};

class SwahiliInKigali extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal1:false,
      showModal2:false
    }
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
  }

  // openModal () {
  //   this.setState({open: true});
  // }
  // closeModal () {
  //   this.setState({open: false});
  // }
  //
  // handleModalChange1() {
  //   this.setState({ ModalContent : '<h1>Modal1 Content </h1>'});
  // }
  //
  // handleModalChange2() {
  //   this.setState({ ModalContent : '<h1>Modal2 Content</h1>'});
  // }

  toggle1() {
    this.setState({
      showModal1: !this.state.showModal1
    });
  }

  toggle2() {
    this.setState({
      showModal2: !this.state.showModal2
    });
  }


  render() {
    const closeBtn1 = <button className="close" onClick={this.toggle1}>&times;</button>;
    const closeBtn2 = <button className="close" onClick={this.toggle2}>&times;</button>;
    const closeBtn3 = <button className="close" onClick={this.toggle3}>&times;</button>;
    const closeBtn4 = <button className="close" onClick={this.toggle4}>&times;</button>;

    return (
      <div>
        <Container align="center">
          <h4>Why do people speak Kiswahili in Kigali?</h4>
            <p>Click on the titles in each section to hear their stories:</p>
        </Container>
        <Container align="left" style={conStyle}>
          <Row>
            <Media left href="migration">
              <Media src={MigrationImg} style={imgStyle} alt="migration_img" />
            </Media>
            <Col>
              <Media body>
                <Media heading onClick={this.toggle1}>Migration</Media>
                Many people speak Swahili because they learned it in the Swahili speaking-surrounding countries of Tanzania, DRC, Burundi, Kenya and Uganda. While reasons behind moving are diverse, migration was often precipitated by the search for better economic opportunity or the political unrest in the region.
              </Media>
              <Modal  isOpen={this.state.showModal1} toggle={this.toggle1} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}>
                <ModalHeader close={closeBtn1}>Luc and Kubwayo</ModalHeader>
                <ModalBody>
                  <Row>
                    <Col>
                      <img src={Luc} style={imgInterviewStyle} alt="luc_img"></img>
                    </Col>
                    <Col>
                      <p><b>Luc</b> owns and runs three bars in Kigali along with a number of side projects. He speaks Congolese Swahili fluently because he spent the first 18 years of his life in the Kivu region of the Congo. Although Luc’s parents are Rwandan, they fled with his grandparents to the Congo during the</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>first waves of ethnic violence. Luc returned to Rwanda in 1998 and now frequently travels to Kenya, Tanzania, and Uganda for business where he uses Swahili frequently. He now says that he understands the great value of learning other languages and is excited about the prospect of the Middlebury language school.</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p><b>Kubwayo</b> (center) is a Swahili-speaking Burundian student who fled political instability in her home country three years ago with her parents. She now studies arts in a small highschool school in Bwerankori and has made many Swahili and non Swahili-speaking friends.</p>
                    </Col>
                    <Col>
                      <img src={Kubwayo} style={imgInterviewStyle} alt="kubwayo_img"></img>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Kubwayo lives in a cell of Kigali which is 70% Swahili speaking.  Most community members come from the Banyamurenge tribe, a group who have recently fled Congo due to violence.</p>
                    </Col>
                  </Row>
                </ModalBody>
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
                <Media heading onClick={this.toggle2}>Business</Media>
                Swahili has been called the lingua franca of trade in Rwanda. Oftentimes business people learn Swahili in order to better conduct business with Swahili speakers in other countries. This means that a lot of shop owners speak Swahili well.
              </Media>
              <Modal isOpen={this.state.showModal2} toggle={this.toggle2} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}>
                <ModalHeader close={closeBtn2}>Interviews 2</ModalHeader>
                  <ModalBody>
                    <Row>
                      <Col>
                        <img src={IslamImg} style={imgInterviewStyle} alt="wrong_img"></img>
                      </Col>
                      <Col>
                        <p>Second interviews</p>
                        </Col>
                    </Row>
                  </ModalBody>
                </Modal>
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
