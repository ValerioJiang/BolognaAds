import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col'

export default class CardAdComponent extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <Col>
      <Card>
        <Card.Img variant="top" src="https://placekitten.com/g/200/300" />
        <Card.Body>
          <Card.Title>Cartellone: {this.props.id}</Card.Title>
          <Card.Text>Via: {this.props.indirizzo}</Card.Text>
          <Button variant="primary">Prenota</Button>
        </Card.Body>
      </Card>
      </Col>
    );
  }
}
