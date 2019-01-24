import React, { Component } from 'react';
import { Button, Container, Table } from 'reactstrap';

class PhraseTable extends Component {
  render() {
    return (
      <Container align="left">
        <Table hover>
        <thead align="center">
          <tr>
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <th scope="row">English</th>
              <td>I will return home soon.<Button color="primary">Listen</Button></td>
              <td>They will put money on our account Thursday morning.</td>
              <td>I reached work late and my boss was upset.</td>
            </tr>
            <tr>
              <th scope="row">Kigali</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Tanzania</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Burundi</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">DRC</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Kenya</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default PhraseTable;
