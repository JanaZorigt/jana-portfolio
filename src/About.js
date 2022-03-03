import React from "react";

export default function About() {
  return <div className="About">

  
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5">
      <div class="container">
        <a class="navbar-brand" href="/" title="Homepage">Jana Zorigt</a>
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
                class="nav-link"
                aria-current="page"
                href="/index.html"
                title="Homepage"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                href="/about.html"
                title="About Jana Zorigt"
                >About me</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/about.html#contact"
                title="Contact Jana Zorigt"
                >Contact me</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <h1 class="text-center">About me</h1>
    <h3 class="text-center">Front-end developer from Ulaanbaatar, Mongolia</h3>
    <div class="about-paragraph text-center">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
        aperiam provident tempora? Cumque adipisci, non dolorem quia, odit qui
        alias veniam excepturi rem dolor fugit dignissimos, sed voluptatum
        blanditiis harum.
      </p>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <img
            src="/images/yoga.png"
            alt="Yoga project"
            class="img-fluid p-2 shadow rounded mb-4"
          />
        </div>
        <div class="col-sm-4">
          <img
            src="/images/weather.png"
            alt="Weather project"
            class="img-fluid p-2 shadow rounded mb-4"
          />
        </div>
        <div class="col-sm-4">
          <img
            src="/images/yogurt.png"
            alt="Yogurt project"
            class="img-fluid p-2 shadow rounded mb-4"
          />
        </div>
      </div>
    </div>

    <div id="contact">
      <h2 class="text-center mt-5">📮 Contact me</h2>
      <a href="mailto:janazorigt@gmail.com" class="email-link"
        >janazorigt@gmail.com</a
      >
    </div>

  </div>;
}
