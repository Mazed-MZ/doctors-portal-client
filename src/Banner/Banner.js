import React from "react";

export default function Banner() {
  return (
    <div>
      <div className="hero shadow-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://media.istockphoto.com/id/1137049930/photo/stethoscope-or-phonendoscope-on-a-doctors-white-desk-on-cloudy-morning-treatment-of-cold-or.jpg?s=612x612&w=0&k=20&c=H-teNt3is2cltZKlWDx2lXRMhkNyL_Y2-cf07tNGtOQ=" alt=""
            className="max-w-md rounded-lg"
          />
          <div>
            <h1 className="text-6xl font-bold">Your new smile start here!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
