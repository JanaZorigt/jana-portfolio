import React from "react";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="container">
        <h3 className="mb-5">Projects I've been working on:</h3>
        <div className="row">
          <div className="col-sm section">
            <h4 className="btn">
              <a
                href="https://jana-architecture.netlify.app/"
                className="architecture-link"
                title="Architecture project"
                target="_blank"
                rel="noreferrer"
              >
                Chicago
                <br />
                Architecture
              </a>
            </h4>
            <img
              src="images/Architecture.png"
              alt="Architecture project"
              className="architecture-image img-fluid rounded"
            />
            <p className="mt-3">Technologies used:</p>
            <img
              src="images/Basics.png"
              alt="Basics"
              className="basics-image img-fluid rounded"
            />
          </div>

          <div className="col-sm section">
            <h4 className="btn">
              <a
                href="https://jana-weather-app.netlify.app/"
                className="weather-link"
                title="Weather project"
                target="_blank"
                rel="noreferrer"
              >
                Weather <br /> Application
              </a>
            </h4>
            <img
              src="images/Weather.png"
              alt="Weather project"
              className="weather-image img-fluid rounded"
            />
            <p className="mt-3">Technologies used:</p>
            <img
              src="images/Plus.png"
              alt="Plus"
              className="plus-image img-fluid rounded"
            />
          </div>

          <div className="col-sm section">
            <h4 className="btn">
              <a
                href="https://jana-restaurant.netlify.app/"
                className="restaurant-link"
                title="Loving Hut Website"
                target="_blank"
                rel="noreferrer"
              >
                Restaurant <br /> Website
              </a>
            </h4>
            <img
              src="images/Restaurant.png"
              alt="Loving Hut Website"
              className="restaurant-image img-fluid rounded"
            />
            <p className="mt-3">Technologies used:</p>
            <img
              src="images/Responsive.png"
              alt="Responsive"
              className="responsive-image img-fluid rounded"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm section">
            <h4 className="btn">
              <a
                href="https://jana-weather-react.netlify.app/"
                className="react-weather-link"
                title="React Weather App"
                target="_blank"
                rel="noreferrer"
              >
                Weather App <br />
                (React)
              </a>
            </h4>
            <img
              src="images/React Weather.png"
              alt="React Weather App"
              className="react-weather-image img-fluid rounded"
            />
            <p className="mt-3">Technologies used:</p>
            <img
              src="images/React.png"
              alt="React"
              className="react-image img-fluid rounded"
            />
          </div>

          <div className="col-sm section">
            <h4 className="btn">
              <a
                href="https://jana-dictionary-react.netlify.app/"
                className="react-dictionary-link"
                title="React Dictionary App"
                target="_blank"
                rel="noreferrer"
              >
                Dictionary App <br />
                (React)
              </a>
            </h4>
            <img
              src="images/React Dictionary.png"
              alt="React Dictionary App"
              className="react-dictionary-image img-fluid rounded"
            />
            <p className="mt-3">Technologies used:</p>
            <img
              src="images/React.png"
              alt="React"
              className="react-image img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
