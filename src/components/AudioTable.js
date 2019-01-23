import React, { Component } from 'react';
import { Button, Container, Table } from 'reactstrap';
import ReactDOM from 'react-dom';
import English1 from './audio_files/e1.mp4';
import English2 from './audio_files/e2.mp4';
import English3 from './audio_files/e3.mp4';
import Tanzania1 from './audio_files/t1.mp4';
import Tanzania2 from './audio_files/t2.mp4';
import Tanzania3 from './audio_files/t3.mp4';
import Kenya1 from './audio_files/ky1.mp4';
import Kenya2 from './audio_files/ky2.mp4';
import Kenya3 from './audio_files/ky3.mp4';

const {render} = ReactDOM;

const SelectAudio = ({selectedAudio, chooseSound}) =>
  <Table hover>
    <thead align='left'>
      <tr>
        <th>#</th>
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
        <th scope="row">1</th>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="e1"
                            checked={selectedAudio === 'e1'}
                            onChange={() => chooseSound('e1')} /> I will return home soon.
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="k1"
                            checked={selectedAudio === 'k1'}
                            onChange={() => chooseSound("k1")} />
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="t1"
                            checked={selectedAudio === 't1'}
                            onChange={() => chooseSound("t1")} />
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="b1"
                            checked={selectedAudio === 'b1'}
                            onChange={() => chooseSound("b1")} />
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="d1"
                            checked={selectedAudio === 'd1'}
                            onChange={() => chooseSound("d1")} />
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="ky1"
                            checked={selectedAudio === 'ky1'}
                            onChange={() => chooseSound("ky1")} />
            </label>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="e2"
                            checked={selectedAudio === 'e2'}
                            onChange={() => chooseSound('e2')} /> They will put money on our account Thursday morning.
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="k2"
                            checked={selectedAudio === 'k2'}
                            onChange={() => chooseSound("k2")} />
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="t2"
                            checked={selectedAudio === 't2'}
                            onChange={() => chooseSound("t2")} />
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="b2"
                            checked={selectedAudio === 'b2'}
                            onChange={() => chooseSound("b2")} />
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="d2"
                            checked={selectedAudio === 'd2'}
                            onChange={() => chooseSound("d2")} />
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="ky2"
                            checked={selectedAudio === 'ky2'}
                            onChange={() => chooseSound("ky2")} />
            </label>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="e3"
                            checked={selectedAudio === 'e3'}
                            onChange={() => chooseSound('e3')} /> I reached work late and my boss was upset.
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="k3"
                            checked={selectedAudio === 'k3'}
                            onChange={() => chooseSound("k3")} />
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="t3"
                            checked={selectedAudio === 't3'}
                            onChange={() => chooseSound("t3")} />
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="b3"
                            checked={selectedAudio === 'b3'}
                            onChange={() => chooseSound("b3")} />
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="d3"
                            checked={selectedAudio === 'd3'}
                            onChange={() => chooseSound("d3")} />
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="ky3"
                            checked={selectedAudio === 'ky3'}
                            onChange={() => chooseSound("ky3")} />
            </label>
          </div>
        </td>
      </tr>
    </tbody>
  </Table>

export default class AudioTable extends Component {

  constructor(props) {
    super(props);
    this.state={ selectedAudio: "e1"}
    this.chooseSound = (audio) => this.setState({selectedAudio: audio});
    this.playAudio = () => {
      switch(this.state.selectedAudio){
        case "e1":
          this.e1.play();
        case "e2":
          this.e2.play();
        case "e3":
          this.e3.play();
        case "k1":
          this.k1.play();
        case "k2":
          this.k2.play();
        case "k3":
          this.k3.play();
        case "t1":
          this.t1.play();
        case "t2":
          this.t2.play();
        case "t3":
          this.t3.play();
        case "b1":
          this.b1.play();
        case "b2":
          this.b2.play();
        case "b3":
          this.b3.play();
        case "d1":
          this.d1.play();
        case "d2":
          this.d2.play();
        case "d3":
          this.d3.play();
        case "ky1":
          this.ky1.play();
        case "ky2":
          this.ky2.play();
        case "ky3":
          this.ky3.play();
        default:
          this.e1.play();
      }
    }
  }

  render() {
    return (
      <Container align="left">
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
    			<source src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3" type="audio/mp3" >
    			</source>
    		</audio>
    		<audio ref={(k2) => { this.k2 = k2; }}>
    			<source src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3" type="audio/mp3" >
    			</source>
        </audio>
    		<audio ref={(k3) => { this.k3 = k3; }}>
    			<source src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3" type="audio/mp3" >
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
    			<source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mp3" >
    			</source>
    		</audio>
        <audio ref={(b2) => { this.b2 = b2; }}>
    			<source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mp3" >
    			</source>
    		</audio>
        <audio ref={(b3) => { this.b3 = b3; }}>
    			<source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mp3" >
    			</source>
    		</audio>
        <audio ref={(d1) => { this.d1 = d1; }}>
    			<source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mp3" >
    			</source>
    		</audio>
        <audio ref={(d2) => { this.d2 = d2; }}>
    			<source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mp3" >
    			</source>
    		</audio>
        <audio ref={(d3) => { this.d3 = d3; }}>
    			<source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mp3" >
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
        <Button color="secondary" onClick={this.playAudio}>Listen</Button>
      </Container>
    );
  }
}

render(<AudioTable />, document.getElementById('root'))
