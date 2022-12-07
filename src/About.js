import React from "react";

export default function About() {
  return (
    <div className="About">
      <div className="row">
        <div className="col">
          <h1>Jana Zorigt</h1>
          <h2>
            Software Engineer, <br />
            based in the United States
          </h2>
          <div className="mt-5 p-3">
            <p className="about-paragraph">
              Hi! Thank you for visiting my portfolio website. My name is
              Jana. After discovering my passion for coding, I graduated as a React Developer at {""}
              <a
                href="https://www.shecodes.io/"
                className="shecodes-link"
                target="_blank"
                rel="noreferrer"
                title="SheCodes website"
              >
                SheCodes
              </a>{" "}
              and currently studying Software Engineering at Arizona State University.
              I can proudly say I'm organized, detail-oriented, responsible and very fast-learner.
              I'm looking forward to start my career and be of assistance in the Tech World!
              Check out my work below and feel free to contact me.
            </p>
          </div>
        </div>

        <div className="col d-none d-lg-block">
          <img
            src="images/Jana.jpg"
            alt="Jana"
            className="jana-image img-fluid mt-5"
          ></img>
        </div>
      </div>
    </div>
  );
}
