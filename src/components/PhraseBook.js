import React, { Component } from 'react';
import { Table, Button, Container } from 'reactstrap';

class PhraseBook extends Component {
  render() {
    return (
      <Container align="left">
        <h4>Phrase Book</h4>
          <p>People say Swahili was born in Zanzibar, grew up in Tanzania, fell sick in Kenya, died in Uganda and was buried in Congo. The reality is that there is no single version of Swahili that is superior to another. Just like with variations of English, Swahili-speakers across different countries will be able to easily communicate, with each country having their own slight variations of Swahili.</p>
          <p>Not sure what we mean by variations in English? When choosing the language for an electronic device, you often see variations of English as follows:</p>
          <li>English (UK)</li>
          <li>English (USA)</li>
          <li>English (Australia)</li>
          <br />
          <p>For Swahili it could be as follows:</p>
          <li>Swahili (Tanzania)</li>
          <li>Swahili (Kenya)</li>
          <li>Swahili (DRC)</li>
        <br />
        <h4>Listen to how differently Swahili is spoken in other countries!</h4>
      </Container>
    );
  }
}

export default PhraseBook;
