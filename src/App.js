import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Top from "./components/Top.js";
import Content from "./components/Content.js";

const App = () => {
  return (
    <div className="ovr-demo">
      <Top />
      <Row className="px-3" style={{ marginTop: "56px" }}>
        <Content />
      </Row>
    </div>
  );
};

export default App;
