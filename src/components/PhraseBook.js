import React, { Component, PureComponent } from 'react';
import { Table, Button } from 'reactstrap';
import ReactDOM from 'react-dom';


const {render} = ReactDOM;

const PhraseTable = ({selectedAudio, chooseSound}) =>
  <Table hover>
    <thead align='left'>
      <tr>
        <th>#</th>
        <th>English</th>
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
              <input type="radio" value="green"
                            checked={selectedAudio === 'green'}
                            onChange={() => chooseSound('green')} />
              I will return home soon.
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="yellow"
                            checked={selectedAudio === 'yellow'}
                            onChange={() => chooseSound("yellow")} />
              yellow
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="pink"
                            checked={selectedAudio === 'pink'}
                            onChange={() => chooseSound("pink")} />
              pink
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="blue"
                            checked={selectedAudio === 'blue'}
                            onChange={() => chooseSound("blue")} />
              blue
            </label>
          </div>
        </td>
        <td></td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="green"
                            checked={selectedAudio === 'green'}
                            onChange={() => chooseSound('green')} />
              They will put money on our account Thursday morning.
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="yellow"
                            checked={selectedAudio === 'yellow'}
                            onChange={() => chooseSound("yellow")} />
              yellow
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="pink"
                            checked={selectedAudio === 'pink'}
                            onChange={() => chooseSound("pink")} />
              pink
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="blue"
                            checked={selectedAudio === 'blue'}
                            onChange={() => chooseSound("blue")} />
              blue
            </label>
          </div>
        </td>
        <td></td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="green"
                            checked={selectedAudio === 'green'}
                            onChange={() => chooseSound('green')} />
              I reached work late and my boss was upset.
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="yellow"
                            checked={selectedAudio === 'yellow'}
                            onChange={() => chooseSound("yellow")} />
              yellow
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="pink"
                            checked={selectedAudio === 'pink'}
                            onChange={() => chooseSound("pink")} />
              pink
            </label>
          </div>
        </td>
        <td>
          <div className="radio">
            <label>
              <input type="radio" value="blue"
                            checked={selectedAudio === 'blue'}
                            onChange={() => chooseSound("blue")} />
              blue
            </label>
          </div>
        </td>
        <td></td>
      </tr>
    </tbody>
  </Table>

export default class PhraseBook extends Component {

  constructor(props) {
    super(props);
    this.state={ selectedAudio: "green"}
    this.chooseSound = (color) => this.setState({selectedAudio: color});
    this.playAudio = () => {
      switch(this.state.selectedAudio){
        case "green":
          this.green.play();
        case "blue":
          this.blue.play();
        case "pink":
          this.pink.play();
        case "yellow":
          this.yellow.play();
        default:
          this.green.play();
      }
    }
  }

  render() {


    return (

      <div className="stage">
		<audio ref={(green) => { this.green = green; }}>
			<source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mpeg" >
			</source>
		</audio>
		<audio ref={(blue) => { this.blue = blue; }}>
			<source src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"type="audio/mpeg" >
			</source>
		</audio>
		<audio ref={(pink) => { this.pink = pink; }}>
			<source src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3" type="audio/mpeg" >
			</source>
		</audio>
		<audio ref={(yellow) => { this.yellow = yellow; }}>
			<source src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3" type="audio/mpeg" >
			</source>
		</audio>		
			<PhraseTable selectedAudio={this.state.selectedAudio} chooseSound={this.chooseSound}/>
      <Button color="secondary" onClick={this.playAudio}>Listen</Button>
      </div>

    );
  }
}

render(<PhraseBook />, document.getElementById('root'))
