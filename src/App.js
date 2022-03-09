import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
