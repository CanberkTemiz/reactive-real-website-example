import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardItem = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/images/empty.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">
            <Link to="#" className="card-button-link">
              Go Somewhere
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardItem;
