import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

export default class PhraseBook extends Component {
  render() {

    const listenButton = (
      <Button color="secondary">Listen</Button>
    );

    return (
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
            <td>{listenButton} I will return home soon.</td>
            <td>{listenButton}</td>
            <td>{listenButton}</td>
            <td>{listenButton}</td>
            <td>{listenButton}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>{listenButton} They will put money on our account Thursday morning.</td>
            <td>{listenButton}</td>
            <td>{listenButton}</td>
            <td>{listenButton}</td>
            <td>{listenButton}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>{listenButton} I reached work late and my boss was upset.</td>
            <td>{listenButton}</td>
            <td>{listenButton}</td>
            <td>{listenButton}</td>
            <td>{listenButton}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
