import React from "react";

export default function Projects() {
  return (
    <div className="Projects">
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-6">
            <img
              src="/images/yoga.png"
              alt="Yoga project"
              class="yoga-image img-fluid rounded"
            />
          </div>
          <div class="col-md-6">
            <h2>Yoga app</h2>
            <p class="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quia, dignissimos nam ratione veniam quibusdam porro
              omnis quam vel eos eveniet alias temporibus deserunt veritatis
              minima fugiat explicabo eum dolore.
            </p>
            <div class="mt-5">
              <a href="#" class="yoga-link" title="Yoga project">
                Launch Yoga App
              </a>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-md-6">
            <h2>Weather app</h2>
            <p class="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quia, dignissimos nam ratione veniam quibusdam porro
              omnis quam vel eos eveniet alias temporibus deserunt veritatis
              minima fugiat explicabo eum dolore.
            </p>
            <div class="mt-5 mb-5">
              <a href="#" class="weather-link" title="Weather project">
                Launch Weather App
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <img
              src="/images/weather.png"
              alt="Weather project"
              class="weather-image img-fluid rounded"
            />
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-md-6">
            <img
              src="/images/yogurt.png"
              alt="Yogurt project"
              class="yogurt-image img-fluid rounded"
            />
          </div>
          <div class="col-md-6">
            <h2>Yogurt app</h2>
            <p class="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quia, dignissimos nam ratione veniam quibusdam porro
              omnis quam vel eos eveniet alias temporibus deserunt veritatis
              minima fugiat explicabo eum dolore.
            </p>
            <div class="mt-5">
              <a href="#" class="yogurt-link" title="Yogurt project">
                Launch Yogurt App
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
