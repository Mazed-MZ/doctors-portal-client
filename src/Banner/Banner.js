import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Banner() {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="hero shadow-2xl" data-aos="fade-down">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/gdZBL3s/chair.png" alt=""
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
