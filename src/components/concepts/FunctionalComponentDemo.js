import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Link} from 'react-router-dom';


const FunctionalComponentDemo = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Functional Component</h1>
        <p>
          Functional Components are the primary tool in React to build a small,
          modular piece of your page.
        </p>
        <dl>
          <dt>Can use state</dt>
          <dd>
            With the 'useState' hook, functional components can now both render
            a display to the page and update information to be shown.
          </dd>
          <dt>No 'this' keyword</dt>
          <dd>
            Older class componeents use 'this', functional componetnts have no
            'this' object.
          </dd>
          <dt>Can use effects</dt>
          <dd>
            With the 'useEffect' hook, functional components can performa side
            effect with any props of state changes.
          </dd>
          <dt>return()</dt>
          <dd>
            Must return a single element, but this element may have nested
            elements inside.
          </dd>
        </dl>
        <div className="cards">
        <NoArrowSyntax />
        <ArrowSyntax />

        </div>
      </div>
    </div>
  );
};


function NoArrowSyntax() {
  return (
    <div class="card-wrapper">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Regular Function</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Hello world!
          </CardSubtitle>
          <CardText>
            This functional component doesn't use Arrow Syntax
          </CardText>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" target="_blank"><Button>Learn more!</Button></a>
        </CardBody>
      </Card>
    </div>
  );
}

const ArrowSyntax = () => {
  return (
    <div class="card-wrapper">

        <Card>
        <CardBody>
          <CardTitle tag="h5">Fat Arrow Function</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Hello world!
          </CardSubtitle>
          <CardText>
            This functional component does use Arrow Syntax
          </CardText>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#arrow_functions" target="_blank"><Button>Learn more!</Button></a>
        </CardBody>
      </Card>
  
    </div>
  );
};


export default FunctionalComponentDemo;

