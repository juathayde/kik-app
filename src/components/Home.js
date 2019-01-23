import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Slider from './Slider.js';

const HomeContent = (props) => {
  return (
    <div>
      <Slider />
      <br />
      <Jumbotron>
        <h1 className="display-3">Map of Kiswahili in Kigali</h1>
        <p className="lead">This project is a culmination of a partnership between Middlebury College's social entrepreneurship and ALU Rwanda's students.</p>
        <hr className="my-2" />
        <p>Special thanks to Middlebury College's Associate Professor of Political Science Nadia Horning, ALU Rwanda, etc.</p>
        <p className="lead">
          <Button color="primary">About KiK</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default HomeContent;
