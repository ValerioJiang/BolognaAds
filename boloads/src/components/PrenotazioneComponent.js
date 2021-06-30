import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Col from "react-bootstrap/Col"


export default class PrenotazioneComponent extends Component {
  render() {
    {console.log(this.props.match.params)}
    return (
        
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ricerca per ID: che è {this.props.match.params.id}</Form.Label>
                <Form.Control type="email" placeholder="ID" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Ricerca
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
