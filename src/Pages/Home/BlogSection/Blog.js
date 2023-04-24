import React from "react";

export default function Blog() {
  return (
    <div>
      <div className="hero mt-32">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/6DHXN5m/treatment.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mx-24">
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
