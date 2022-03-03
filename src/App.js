import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Projects from "./Projects";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5">
          <div class="container">
            <a class="navbar-brand" href="./" title="Homepage">
              Jana Zorigt
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="./"
                    title="Homepage"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="./About.js"
                    title="About Jana Zorigt"
                  >
                    About me
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/about.html#contact"
                    title="Contact Jana Zorigt"
                  >
                    Contact me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <h2 class="text-center">👋 Hi I am</h2>
        <h1 class="text-center">Jana Zorigt</h1>
        <h3 class="mt-3 text-center">
          🇲🇳 Front-end developer, based in the United States
        </h3>

        <div class="navigation-links">
          <a
            href="/about.html#contact"
            class="contact-link"
            title="Contact Jana Zorigt"
          >
            Contact me
          </a>
          <a href="/about.html" class="about-link" title="About Jana Zorigt">
            About me
          </a>
        </div>

        <Projects />
      </div>
    </div>
  );
}
