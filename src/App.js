import React from "react";
import "./App.css";
import { Row } from "react-bootstrap";
import Top from "./components/Top.js";
import Content from "./components/Content.js";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="ovr-demo">
        <Top />
        <Row className="px-3" style={{ marginTop: "56px" }}>
          <Content />
        </Row>
      </div>
    </Router>
  );
};

export default App;
