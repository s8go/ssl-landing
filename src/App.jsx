import { useState } from "react";
import "./styles/App.css";
import Section from "./components/body/Section";
import Nav from "./components/nav/nav";

function App() {

  return (
    <div className="app">
      <h1>HELLO</h1>
      <Nav/>
      <Section/>
    </div>
  );
}

export default App;
