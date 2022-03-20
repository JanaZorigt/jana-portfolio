import React from "react";

export default function Footer() {
  return (
    <footer className="text-center m-5">
      <div>
        <a
          href="mailto:janazorigt@gmail.com"
          className="email-link"
          title="Email Jana"
        >
          janazorigt@gmail.com
        </a>
      </div>

      <div class="social-links d-flex justify-content-center m-5">
        <a
          href="https://github.com/JanaZorigt"
          target="_blank"
          rel="noreferrer"
          title="GitHub Profile"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/jana_zorigt/"
          target="_blank"
          rel="noreferrer"
          title="Instragram Profile"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/janazorigt/"
          target="_blank"
          rel="noreferrer"
          title="Linkedin Profile"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>

      <p class="code-source text-center">
        This website was coded by Jana Zorigt, and is{" "}
        <a
          href="https://github.com/JanaZorigt/jana-portfolio"
          target="_blank"
          rel="noreferrer"
          title="GitHub link"
        >
          open-sourced
        </a>
      </p>
    </footer>
  );
}
