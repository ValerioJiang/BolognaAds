import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import 'leaflet/dist/leaflet.css';

export default class HomeComponent extends Component {
  render() {
    return (
      <Container fluid>
        <Container>
          <Card>
            <Card.Body>
              <Card.Title>Benvenuti sul portale rent my ad!</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Il portale per la gestione dei noleggi dei cartelli pubblicitari comunali
              </Card.Subtitle>
              <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Card.Text>
              <Button href="/ads">Look all ads</Button>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    );
  }
}
