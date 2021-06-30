import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import CardAdComponent from "./CardAdComponent";
import { Link } from "react-router-dom";

/**
 * TODO Risolvere src cardimage
 */

export default class AdsComponent extends Component {
  constructor() {
    super();
    this.state = {
      cartelloni: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:8080/cartellone/`);
    const json = await response.json();
    this.setState({ cartelloni: json });
  }

  cardCartelloniList() {
    const respData = this.state.cartelloni.map((item) => (
      
      <Col sm={4}>
        <Card>
        
        <Card.Img variant="top" src="http://www.gdc.ancitel.it/wp-content/uploads/2019/07/cartellone1.jpg" alt="immagine cartellone" />
          <Card.Body>
            <Card.Title>Cartellone: {item.id}</Card.Title>
            <Card.Text>Via: {item.indirizzo}</Card.Text>
            
            <Link to={"ads/"+item.id+"/prenotazione"}>
            <Button variant="primary">Prenota</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    
    ));
    return respData;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ricerca per ID</Form.Label>
                <Form.Control type="email" placeholder="ID" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Ricerca
              </Button>
            </Form>
          </Col>
        </Row>
        <br />
        <Row>
          {this.cardCartelloniList()}
        </Row>
      </Container>
    );
  }
}
