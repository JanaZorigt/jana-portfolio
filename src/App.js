import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Projects from "./Projects";
import About from "./About";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 class="text-center">👋 Hi I am</h2>
        <h1 class="text-center">Jana Zorigt</h1>
        <h3 class="mt-3 text-center">
          🇲🇳 Front-end developer, based in the United States
        </h3>

        <About />
        <Projects />
        <div className="footer">
          <h2 class="text-center mt-5">📮 Contact me</h2>
          <a href="mailto:janazorigt@gmail.com" class="email-link">
            janazorigt@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
