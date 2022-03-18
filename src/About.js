import React from "react";

export default function About() {
  return (
    <div className="About">
      <div className="row">
        <div className="col">
          <h1>Jana Zorigt</h1>
          <h2>
            Front-end developer, <br />
            based in the United States
          </h2>
          <div className="mt-5 p-3">
            <p className="about-paragraph">
              Hi! My name is Jana. I recently finished SheCodes workshops with
              great satisfaction and knowledge. Craving to learn more, I'm
              currently seeking new opportunities in front-end development. I'm
              open to work remotely and have flexible hours. I have bachelor's
              degree in Finance/Accounting. I'm very fast-learner, organized,
              detail-oriented, responsible, and most of all greatly passionate
              about coding! <br />
              Please feel free to contact me!
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
