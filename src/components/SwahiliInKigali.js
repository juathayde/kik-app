import React, { Component } from 'react';
import { Button, Container, Row, Col, Media, Modal, ModalHeader, ModalBody } from 'reactstrap';
import MigrationImg from './image_files/migration.png';
import BusinessImg from './image_files/business.png';
import CommunityImg from './image_files/community.png';
import IslamImg from './image_files/islam.png';
import Luc from './image_files/Luc.JPG';
import Kubwayo from './image_files/Kubwayo.JPG';
import Kayipabo from './image_files/Kayipabo.jpg';
import Mbonyitegeko from './image_files/Mbonyitegeko.JPG';
import Elders from './image_files/elders.JPG';
import Isa from './image_files/Isa.JPG';
import Yousif from './image_files/Yousif.JPG';


var imgStyle = {
  maxHeight: '128px',
  maxWidth: '128px',
  paddingLeft: '20px',
  paddingTop: '10px'
};

var imgInterviewStyle = {
  maxHeight: '250px',
  maxWidth: '250px',
};

const conStyle = {
  margin: '40px',
  border: '5px solid gray',
  borderRadius: '25px',
  padding: '5px',
  backgroundColor: 'white'
};

const linkStyle = {
  color: 'black',
  padding: '0px'
};

class SwahiliInKigali extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
    }

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
  }

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

  toggle3() {
    this.setState({
      showModal3: !this.state.showModal3
    });
  }

  toggle4() {
    this.setState({
      showModal4: !this.state.showModal4
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
          <h4>Why Do People Speak Kiswahili in Kigali?</h4>
            <p>Click on the titles in each section to hear their stories:</p>
        </Container>
        <Container align="left" style={conStyle}>
          <Row>
            <Media left href="migration">
              <Media src={MigrationImg} style={imgStyle} alt="migration_img" />
            </Media>
            <Col>
              <Media body>
                <Button color='link' style={linkStyle} onClick={this.toggle1}><b><h4>Migration</h4></b></Button>
                <p>Many people speak Swahili because they learned it in the Swahili speaking-surrounding countries of Tanzania, DRC, Burundi, Kenya and Uganda. While reasons behind moving are diverse, migration was often precipitated by the search for better economic opportunity or the political unrest in the region.</p>
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
                <Button color='link' style={linkStyle} onClick={this.toggle2}><h4><b>Business</b></h4></Button>
                <p>Swahili has been called the lingua franca of trade in Rwanda. Oftentimes business people learn Swahili in order to better conduct business with Swahili speakers in other countries. This means that a lot of shop owners speak Swahili well.</p>
              </Media>
              <Modal isOpen={this.state.showModal2} toggle={this.toggle2} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}>
                <ModalHeader close={closeBtn2}>Kayipabo</ModalHeader>
                  <ModalBody>
                    <Row>
                      <Col>
                        <img src={Kayipabo} style={imgInterviewStyle} alt="kayipabo_img"></img>
                      </Col>
                      <Col>
                        <p><b>Kayipabo</b> is Rwandan but speaks Kiswahili as he went to high school and university in DRC. He now uses the languages extensively when he does business in surrounding countries and as a consultant for the World Bank. He explained that is absolutely necessary for</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>people to know Kiswahili, especially if they want to do business throughout East Africa, and that it is a problem that people only speak kinyarwanda here. He believes that when people speak multiple languages like Swahili, French and English, they are seen as more civilized.</p>
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
                <Button color='link' style={linkStyle} onClick={this.toggle3}><h4><b>Community</b></h4></Button>
                <p>Many people learn Swahili simply from talking to their Swahili-speaking neighbors. However, these people are not usually fluent in the language. Additionally, children oftentimes learn from their parents who were born or spent time in Tanzania, Kenya and the DRC.</p>
              </Media>
              <Modal isOpen={this.state.showModal3} toggle={this.toggle3} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}>
                <ModalHeader close={closeBtn3}>Mbonyitegeko and Community Elders</ModalHeader>
                  <ModalBody>
                    <Row>
                      <Col>
                        <img src={Mbonyitegeko} style={imgInterviewStyle} alt="mbonyitegeko_img"></img>
                      </Col>
                      <Col>
                        <p><b>Mbonyitegeko</b> is from the west of Rwanda from a town called Kamembe. He said that he did not learn Swahili in school but from his family and friends. Even to this day he does not know where his family learned Swahili from but it can be assumed they learned from interactions or migration across the DRC border.</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>These five community elders were all born and raised in Nyamirambo. They say that they all learned Swahili not from their families but simply from talking to their friends and neighbors.</p>
                      </Col>
                      <Col>
                        <img src={Elders} style={imgInterviewStyle} alt="elders_img"></img>
                      </Col>
                    </Row>
                  </ModalBody>
                </Modal>
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
                <Button color='link' style={linkStyle} onClick={this.toggle4}><h4><b>Islam</b></h4></Button>
                <p>Many Muslims (although not all) speak Swahili because it is the language used in mosques and religious schools. Moreover, many Muslims originate from the East African coast, where Swahili is frequently spoken.</p>
            </Media>
            <Modal isOpen={this.state.showModal4} toggle={this.toggle4} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}>
              <ModalHeader close={closeBtn4}>Isa and Yousif</ModalHeader>
                <ModalBody>
                  <Row>
                    <Col>
                      <img src={Isa} style={imgInterviewStyle} alt="isa_img"></img>
                    </Col>
                    <Col>
                      <p><b>Isa</b> is a Muslim fruit seller who sells bananas, tree tomatoes and pineapples deep within the labyrinth of the Kimirongo Market. He says that he learned Swahili from interacting with the many Ugandans, Kenyans, and Tanzanians who also worship at his mosque. Although</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Swahili is commonly spoken in and around the mosque, he says that the Friday sermons are in Arabic so that the Rwandan muslims who do not understand Swahili can participate.</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p><b>Yousif</b> works as a leader in his local Mosque in Kimirongo. He said that he learned Swahili from attending religious school, called a madrasa, growing up in the muslim heavy district of Nyamirambo.</p>
                    </Col>
                    <Col>
                      <img src={Yousif} style={imgInterviewStyle} alt="yousif_img"></img>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>He believes that many Rwandan muslims speak Swahili but not all Rwandans who speak Swahili are muslims.</p>
                    </Col>
                  </Row>
                </ModalBody>
              </Modal>
          </Col>
        </Row>
      </Container>
      <br />
      </div>
    );
  }
}

export default SwahiliInKigali;
