/*
  navigation-bar displays the list of sections for the collection of
  articles passed down in its props. Clicking on one of these sections displays
  a list of the available titles in that current section.
*/
/* eslint no-underscore-dangle: [2, { "allow": ["_id"] }] */
import React from 'react';
import classNames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Form, FormGroup,
  Label, Input, CardImg, CardBody, CardGroup, CardSubtitle } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Intro & Participants
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Why Swahili?
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Why Kigali?
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Swahili in Kigali
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('5'); }}
            >
              Swahili Resources
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('6'); }}
            >
              Contact Us
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <br/ >
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
            </Row>
          </TabPane>
          <TabPane tabId="4">
          </TabPane>
          <TabPane tabId="5">
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col sm="12">
              <Form align = "left">
                <FormGroup>
                  <Label for="exampleName"><b>Name</b></Label>
                  <Input type="email" name="user_name" id="exampleName" placeholder="Your name" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail"><b>Email</b></Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Insert your email here" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText"><b>Ask Us A Question</b></Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button> Submit </Button>
              </Form>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
