import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Appointment() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="hero mt-32"
      style={{
        backgroundImage: `url("https://i.ibb.co/60VB2cW/appointment.png")`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <div
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          <h4 className="text-lg text-primary font-bold">Appointment</h4>
          <h1 className="text-white text-4xl font-bold">
            Make an appointment Today
          </h1>
          <p className="text-white py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <img
          src="https://i.ibb.co/3NxkQ0H/doctor-small.png"
          alt=""
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="-mt-32 hidden md:block lg:w-1/2 rounded-lg"
        />
      </div>
    </div>
  );
}
