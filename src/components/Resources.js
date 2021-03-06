import React, { Component } from 'react';
import MapContainer from './Map.js';
import { Container, Col, Row } from 'reactstrap';
import TeachRwanda from './image_files/teachr.png';
import Marembo from './image_files/marembo.png';

const imgStyle = {
  maxHeight: '180px',
  maxWidth: '300px',
  align: 'middle',
  paddingRight: '15px'
}

class Resources extends Component {
  render() {
    return (
      <Container>
        <Container>
          <MapContainer />
        </Container>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Container align="left">
        <Row>
          <Col>
            <h4>Online Resources</h4>
            <p>To supplement the instruction of Swahili at the language school, here is a list of additional online Swahili resources:</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <h5>Dictionaries, Ebooks & More</h5>
            <li><a href="https://en.bab.la/dictionary/english-swahili/">Ba.bla</a></li>
            <li><a href="https://www.lexilogos.com/english/swahili_dictionary.htm#">LexiLogos</a></li>
            <li><a href="https://www.livelingua.com/project/fsi/Swahili/">Live Lingua Project</a></li>
            <li><a href="https://wizzwoo.com/download.php?q=complete-swahili-teach-yourself-audio-ebook-teach-yourself-audio-ebooks-english-edition">Swahili Teach Yourself Ebook</a></li>
            <li><a href="http://www.glcom.com/hassan/lessons/teach_yourself_swahili_cd_content.pdf">Teach Yourself Swahili</a></li>
            <li><a href="http://www.glcom.com/hassan/poems/swahili_poems.html">Kiswahili Poems</a></li>
          </Col>
          <Col>
            <h5>YouTube Channels</h5>
            <li><a href="https://www.youtube.com/channel/UCH1XG4pSG6Sh2NAXqjhtxpg">Kiswahili Nursery Rhymes</a></li>
            <li><a href="https://www.youtube.com/user/SwahiliPod101">SwahiliPod101</a></li>
            <li><a href="https://www.youtube.com/user/ubongokids">Ubongo Kids</a></li>
            <li><a href="https://www.youtube.com/channel/UCcJywQx_THCEr5-1mJbGL9w">Akili and Me- Kiswahili Series</a></li>
            <li><a href="https://www.youtube.com/watch?v=ZyfODqd_H08&list=PLBv6B6E0IuHh8iQjnDxpqLatlZTiZNdCk">Kiswahili Grammar</a></li>
          </Col>
          <Col>
            <h5>Radio & Music</h5>
            <li><a href="https://www.bbc.com/swahili">BBC</a></li>
            <li><a href="http://www.radio.net/language/Swahili/">Various Kiswahili Stations</a></li>
            <li><a href="https://lyricstranslate.com/en/yemi-alade-na-gode-swahili-version-lyrics.html">Yemi Alade- Na Gode</a></li>
            <li><a href="https://www.youtube.com/watch?v=_xZcO8DtYl0">Diamond Platnum- Kamwambie</a></li>
          </Col>
        </Row>
        </Container>
        <br />
        <Container align='left'>
        <Row>
          <Col>
            <h4>Organizations</h4>
            <p>Major international and local organizations work in Kigali, dealing with various aspects such as education, women’s empowerment, health awareness and skills development. While each organization in Kigali has different goals, volunteer and internship opportunities are available for Swahili speakers in many of them.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>As the host institution, <b>ALU Rwanda</b> offers internship opportunities for students, including Swahili speakers, in various fields and locations. Internships range from medical care, to law and human rights, to social entrepreneurship and much more.</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <p>Besides ALU, international and local organizations are always looking for talent to strengthen their team and pursue significant opportunities for growth. To name a few: <b>TEACH Rwanda</b> is an international organization working with volunteers and teachers to transform early childhood teacher education.</p>
          </Col>
          <Col xs="auto">
          <img src={TeachRwanda} style={imgStyle} alt=""/>
          </Col>
        </Row>
        <Row>
          <Col xs="auto">
            <img src={Marembo} style={imgStyle} alt="" />
          </Col>
          <Col>
            <p><b>Centre Marembo</b> is a local organization that aims to improve the lives of disadvantaged youth in Kigali through training and educational support. Additionally, some local primary and secondary schools welcome partnerships with ALU students to promote knowledge creation and sharing in the classrooms.</p>
            <p>Additionally, some local primary and secondary schools welcome partnerships with students to promote knowledge creation and sharing in the classrooms. <b>Groupe Scolaire Gatenga</b> in Kigali is an example of a school that welcomes partnerships with students interested in Swahili. Interested students might contact Professor Harerimana Balthazar for more information.</p>
          </Col>
        </Row>
        </Container>
        <br />
      </Container>
    );
  }
}

export default Resources;
