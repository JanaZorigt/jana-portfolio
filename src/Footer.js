import React from "react";

export default function Footer() {
  return (
    <footer className="text-center m-5">
      <div>
        <a
          href="mailto:janazorigt@gmail.com"
          className="email-link text-center"
          title="Email Jana"
        >
          janazorigt@gmail.com
        </a>
      </div>

      <div className="social-links d-flex justify-content-center m-5">
        <a
          href="https://github.com/JanaZorigt"
          target="_blank"
          rel="noreferrer"
          title="GitHub Profile"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/jana_zorigt/"
          target="_blank"
          rel="noreferrer"
          title="Instragram Profile"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/janazorigt/"
          target="_blank"
          rel="noreferrer"
          title="Linkedin Profile"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      <div className="coded-by text-center">
        <a
          href="https://github.com/JanaZorigt/jana-portfolio"
          target="_blank"
          rel="noreferrer"
          title="GitHub link"
        >
          Open-sourced
        </a>{" "}
        code by Jana Zorigt
      </div>
    </footer>
  );
}
