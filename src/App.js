import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Projects from "./Projects";
import About from "./About";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>👋 Hi I am</h2>
        <h1>Jana Zorigt</h1>
        <h3>🇲🇳 Front-end developer, based in the United States</h3>

        <About />
        <Projects />
        <div className="footer">
          <h2>📮 Contact me</h2>
          <a href="mailto:janazorigt@gmail.com" className="email-link">
            janazorigt@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
