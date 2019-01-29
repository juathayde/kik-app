import React, { Component } from 'react';
import { Button, Col, Container, Row, Table, UncontrolledTooltip } from 'reactstrap';
import ReactDOM from 'react-dom';
import English1 from './audio_files/e1.mp4';
import English2 from './audio_files/e2.mp4';
import English3 from './audio_files/e3.mp4';
import Kigali1 from './audio_files/k1.mp3';
import Kigali2 from './audio_files/k2.mp3';
import Kigali3 from './audio_files/k3.mp3';
import Tanzania1 from './audio_files/t1.mp4';
import Tanzania2 from './audio_files/t2.mp4';
import Tanzania3 from './audio_files/t3.mp4';
import Burundi1 from './audio_files/b1.mp3';
import Burundi2 from './audio_files/b2.mp3';
import Burundi3 from './audio_files/b3.mp3';
import DRC1 from './audio_files/d1.mp3';
import DRC2 from './audio_files/d2.mp3';
import DRC3 from './audio_files/d3.mp3';
import Kenya1 from './audio_files/ky1.mp3';
import Kenya2 from './audio_files/ky2.mp3';
import Kenya3 from './audio_files/ky3.mp3';


const {render} = ReactDOM;

const SelectAudio = ({selectedAudio, chooseSound}) =>
  <div>
  <Table hover>
    <thead>
      <tr>
        <th></th>
        <th>English</th>
        <th>Kigali</th>
        <th>Tanzania</th>
        <th>Burundi</th>
        <th>DRC</th>
        <th>Kenya</th>
      </tr>
    </thead>
    <tbody align='left'>
      <tr>
        <th scope="row">
          <div align='center' className="radio">
            <label>
              <input type="radio" value="e1"
                            checked={selectedAudio === 'e1'}
                            onChange={() => chooseSound('e1')} />
            </label>
          </div>
        </th>
        <td>I will return home soon.</td>
        <td>
          <div align='center' className="radio">
            <label>
              <span href="#" id="kigali1">
                <input type="radio" value="k1"
                            checked={selectedAudio === 'k1'}
                            onChange={() => chooseSound("k1")} /></span>
            </label>
          </div>
        </td>
        <td>
          <div align='center' className="radio">
            <label>
              <span href="#" id="tanzania1">
                <input type="radio" value="t1"
                              checked={selectedAudio === 't1'}
                              onChange={() => chooseSound("t1")} /></span>
            </label>
          </div>
        </td>
        <td>
          <div align='center' className="radio">
            <label>
              <span href="#" id="burundi1">
                <input type="radio" value="b1"
                              checked={selectedAudio === 'b1'}
                              onChange={() => chooseSound("b1")} /></span>
            </label>
          </div>
        </td>
        <td>
          <div align='center' className="radio">
            <label>
              <span href="#" id="drc1">
                <input type="radio" value="d1"
                              checked={selectedAudio === 'd1'}
                              onChange={() => chooseSound("d1")} /></span>
            </label>
          </div>
        </td>
        <td>
          <div align='center' className="radio">
            <label>
              <span href="#" id="kenya1">
                <input type="radio" value="ky1"
                              checked={selectedAudio === 'ky1'}
                              onChange={() => chooseSound("ky1")} /></span>
            </label>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <div align='center' className="radio">
            <label>
              <input type="radio" value="e2"
                            checked={selectedAudio === 'e2'}
                            onChange={() => chooseSound('e2')} />
            </label>
          </div>
        </th>
        <td>They will put money on our account Thursday evening.</td>
        <td>
          <div align='center' className="radio">
            <label>
              <span href="#" id="kigali2">
                <input type="radio" value="k2"
                              checked={selectedAudio === 'k2'}
                              onChange={() => chooseSound("k2")} /></span>
            </label>
          </div>
        </td>
        <td>
          <div align='center' className="radio">
            <label>
              <span href="#" id="tanzania2">
                <input type="radio" value="t2"
                              checked={selectedAudio === 't2'}
                              onChange={() => chooseSound("t2")} /></span>
            </label>
          </div>
        </td>
        <td>
          <div align='center' className="radio">
            <label>
              <span href="#" id="burundi2">
                <input type="radio" value="b2"
                              checked={selectedAudio === 'b2'}
                              onChange={() => chooseSound("b2")} /></span>
            </label>
          </div>
        </td>
        <td>
          <div align='center' className="radio">
            <label>
              <span href="#" id="drc2">
                <input type="radio" value="d2"
                              checked={selectedAudio === 'd2'}
                              onChange={() => chooseSound("d2")} /></span>
            </label>
          </div>
        </td>
        <td>
          <div align='center' className="radio">
            <label>
              <span href="#" id="kenya2">
                <input type="radio" value="ky2"
                              checked={selectedAudio === 'ky2'}
                              onChange={() => chooseSound("ky2")} /></span>
            </label>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">
          <div align='center' className="radio">
            <label>
              <input type="radio" value="e3"
                            checked={selectedAudio === 'e3'}
                            onChange={() => chooseSound('e3')} />
            </label>
          </div>
        </th>
        <td>I reached work late and my boss was upset.</td>
        <td>
          <div align='center' className="radio">
            <label>
              <span href="#" id="kigali3">
                <input type="radio" value="k3"
                              checked={selectedAudio === 'k3'}
                              onChange={() => chooseSound("k3")} /></span>
            </label>
          </div>
        </td>
        <td>
          <div align='center' className="radio">
            <label>
              <span href="#" id="tanzania3">
                <input type="radio" value="t3"
                              checked={selectedAudio === 't3'}
                              onChange={() => chooseSound("t3")} /></span>
            </label>
          </div>
        </td>
        <td>
          <div align='center' className="radio">
            <label>
              <span  href="#" id="burundi3">
                <input type="radio" value="b3"
                              checked={selectedAudio === 'b3'}
                              onChange={() => chooseSound("b3")} /></span>
            </label>
          </div>
        </td>
        <td>
          <div align='center' className="radio">
            <label>
              <span href="#" id="drc3">
                <input type="radio" value="d3"
                              checked={selectedAudio === 'd3'}
                              onChange={() => chooseSound("d3")} /></span>
            </label>
          </div>
        </td>
        <td>
          <div align='center' className="radio">
            <label>
              <span href="#" id="kenya3">
                <input type="radio" value="ky3"
                              checked={selectedAudio === 'ky3'}
                              onChange={() => chooseSound("ky3")} /></span>
            </label>
          </div>
        </td>
      </tr>
    </tbody>
  </Table>
  <UncontrolledTooltip placement="right" target="kigali1">
    Nitarudi Nyumbani karibuni.
  </UncontrolledTooltip>
  <UncontrolledTooltip placement="right" target="kigali2">
    Wata tia pesa kwa accounti yako Alhmisi usiku.
  </UncontrolledTooltip>
  <UncontrolledTooltip placement="right" target="kigali3">
    Replace text.
  </UncontrolledTooltip>
  <UncontrolledTooltip placement="right" target="tanzania1">
    Nitarudi nyumbani karibuni.
  </UncontrolledTooltip>
  <UncontrolledTooltip placement="right" target="tanzania2">
    Wata weka pesa kwenye accounti yangu Alhmisi jioni.
  </UncontrolledTooltip>
  <UncontrolledTooltip placement="right" target="tanzania3">
    Nilichelea kufika kazani boss wangu akasilika.
  </UncontrolledTooltip>
  <UncontrolledTooltip placement="right" target="burundi1">
    Nitarudi Nyumbanihivi Karibu.
  </UncontrolledTooltip>
  <UncontrolledTooltip placement="right" target="burundi2">
    Wata tia pesa ku banki  sikuya ine  usiku.
  </UncontrolledTooltip>
  <UncontrolledTooltip placement="right" target="burundi3">
    Nimefika ku kazi nachelewa, na boss wangu akasilika.
  </UncontrolledTooltip>
  <UncontrolledTooltip placement="right" target="drc1">
    Minata rentrer ku palais.
  </UncontrolledTooltip>
  <UncontrolledTooltip placement="right" target="drc2">
    Batatiya franca mû compte jeudi soir.
  </UncontrolledTooltip>
  <UncontrolledTooltip placement="right" target="drc3">
    Nilifika ku boulot na retard, chef aliniona mal.
  </UncontrolledTooltip>
  <UncontrolledTooltip placement="right" target="kenya1">
    Nitafika kejani ma time.
  </UncontrolledTooltip>
  <UncontrolledTooltip placement="right" target="kenya2">
    Wataweka doh kwa acounti yako Thursday mawusiku.
  </UncontrolledTooltip>
  <UncontrolledTooltip placement="right" target="kenya3">
    Nilifika wax kama nijmechelewa mkubwa akajam.
  </UncontrolledTooltip>
  </div>

export default class AudioTable extends Component {

  constructor(props) {
    super(props);
    this.state={ selectedAudio: "e1"}
    this.chooseSound = (audio) => this.setState({selectedAudio: audio});
    this.playAudio = () => {
      switch(this.state.selectedAudio){
        case "e1":
          this.e1.play();
          break;
        case "e2":
          this.e2.play();
          break;
        case "e3":
          this.e3.play();
          break;
        case "k1":
          this.k1.play();
          break;
        case "k2":
          this.k2.play();
          break;
        case "k3":
          this.k3.play();
          break;
        case "t1":
          this.t1.play();
          break;
        case "t2":
          this.t2.play();
          break;
        case "t3":
          this.t3.play();
          break;
        case "b1":
          this.b1.play();
          break;
        case "b2":
          this.b2.play();
          break;
        case "b3":
          this.b3.play();
          break;
        case "d1":
          this.d1.play();
          break;
        case "d2":
          this.d2.play();
          break;
        case "d3":
          this.d3.play();
          break;
        case "ky1":
          this.ky1.play();
          break;
        case "ky2":
          this.ky2.play();
          break;
        case "ky3":
          this.ky3.play();
          break;
        default:
          this.e1.play();
      }
    }
  }

  render() {
    return (
      <div>
      <Container align='left'>
        <Row>
          <Col>
          <h3><span style={{textDecoration: "underline", color:"black"}}  href="#" id="phrasebook">Phrase Book</span></h3>
          <UncontrolledTooltip placement="right" target="phrasebook">
            Listen to Different Dialects of Swahili below!
          </UncontrolledTooltip>
            <p>People say Swahili was born in Zanzibar, grew up in Tanzania, fell sick in Kenya, died in Uganda and was buried in Congo. The reality is that there is no single version of Swahili that is superior to another. Just like with variations of English, Swahili-speakers across different countries will be able to easily communicate, with each country having their own slight variations of Swahili.</p>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
      		  <audio ref={(e1) => { this.e1 = e1; }}>
        			<source src={English1} type="audio/mp4" >
        			</source>
        		</audio>
        		<audio ref={(e2) => { this.e2 = e2; }}>
        			<source src={English2} type="audio/mp4" >
        			</source>
        		</audio>
        		<audio ref={(e3) => { this.e3 = e3; }}>
        			<source src={English3} type="audio/mp4" >
        			</source>
        		</audio>
        		<audio ref={(k1) => { this.k1 = k1; }}>
        			<source src={Kigali1} type="audio/mp3" >
        			</source>
        		</audio>
        		<audio ref={(k2) => { this.k2 = k2; }}>
        			<source src={Kigali2} type="audio/mp3" >
        			</source>
            </audio>
        		<audio ref={(k3) => { this.k3 = k3; }}>
        			<source src={Kigali3} type="audio/mp3" >
        			</source>
        		</audio>
            <audio ref={(t1) => { this.t1 = t1; }}>
        			<source src={Tanzania1} type="audio/mp4" >
        			</source>
        		</audio>
            <audio ref={(t2) => { this.t2 = t2; }}>
        			<source src={Tanzania2}  type="audio/mp4" >
        			</source>
        		</audio>
            <audio ref={(t3) => { this.t3 = t3; }}>
        			<source src={Tanzania3} type="audio/mp4" >
        			</source>
        		</audio>
            <audio ref={(b1) => { this.b1 = b1; }}>
        			<source src={Burundi1} type="audio/mp3" >
        			</source>
        		</audio>
            <audio ref={(b2) => { this.b2 = b2; }}>
        			<source src={Burundi2} type="audio/mp3" >
        			</source>
        		</audio>
            <audio ref={(b3) => { this.b3 = b3; }}>
        			<source src={Burundi3} type="audio/mp3" >
        			</source>
        		</audio>
            <audio ref={(d1) => { this.d1 = d1; }}>
        			<source src={DRC1} type="audio/mp3" >
        			</source>
        		</audio>
            <audio ref={(d2) => { this.d2 = d2; }}>
        			<source src={DRC2} type="audio/mp3" >
        			</source>
        		</audio>
            <audio ref={(d3) => { this.d3 = d3; }}>
        			<source src={DRC3} type="audio/mp3" >
        			</source>
        		</audio>
            <audio ref={(ky1) => { this.ky1 = ky1; }}>
        			<source src={Kenya1} type="audio/mp4" >
        			</source>
        		</audio>
            <audio ref={(ky2) => { this.ky2 = ky2; }}>
        			<source src={Kenya2} type="audio/mp4" >
        			</source>
        		</audio>
            <audio ref={(ky3) => { this.ky3 = ky3; }}>
        			<source src={Kenya3} type="audio/mp4" >
        			</source>
        		</audio>
            <SelectAudio selectedAudio={this.state.selectedAudio} chooseSound={this.chooseSound}/>
          </Col>
        </Row>
      </Container>
      <Container>
        <Button color="secondary" onClick={this.playAudio}>Listen</Button>
      </Container>
      </div>
    );
  }
}

render(<AudioTable />, document.getElementById('root'))
