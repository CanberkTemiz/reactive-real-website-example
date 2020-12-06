import React from "react";
import CardItem from "./CardItem";
import { CardDeck, Col, Row } from "react-bootstrap";
import "./Cards.css";
import styled from "styled-components";

const StyledRow = styled(Row)`
  justify-content: center;
  margin-bottom: 80px;
`;

const Cards = () => {
  return (
    <div className="cards">
      <h2>Check out these cards</h2>

      <StyledRow>
        <CardDeck>
          <CardItem />
          <CardItem />
        </CardDeck>
      </StyledRow>
      <StyledRow>
        <CardDeck>
          <CardItem />
          <CardItem />
          <CardItem />
        </CardDeck>
      </StyledRow>
    </div>
  );
};

export default Cards;

{
  /* <div className="cards">
<h1>Cards component starts here</h1>
<div className="cards-container">
  <CardItem />
</div>
</div> */
}
