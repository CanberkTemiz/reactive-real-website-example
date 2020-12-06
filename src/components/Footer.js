import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import styled from "styled-components";
import "./Footer.css";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>Subscription</h1>
      <p> Lorem ipsum </p>
      <StyledForm>
        <Form.Group>
          <Form.Control placeholder="Enter your ..." />
        </Form.Group>
        <Button variant="dark">Subscribe</Button>
      </StyledForm>
    </div>
  );
};

export default Footer;
