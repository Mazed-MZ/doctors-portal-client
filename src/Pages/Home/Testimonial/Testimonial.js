import React, { useEffect } from "react";
import TestimonialsCard from "./TestimonialsCard";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Testimonial() {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const testimonialData = [
    {
      id: 1,
      img: "https://i.ibb.co/h22yT3M/people1.png",
      name: "Winson Herry",
      description:
        "Lorem ipsam and this is the cavity fellings station with food divarsity and the major part is AI generated coumputer ganaralized hospital which is serve batter than the other competitor",
      country: "California",
    },
    {
      id: 2,
      img: "https://i.ibb.co/yQGygsC/people2.png",
      name: "Nayla Gomaz",
      description:
        "Lorem ipsam and this is the cavity fellings station with food divarsity and the major part is AI generated coumputer ganaralized hospital which is serve batter than the other competitor",
      country: "Canada",
    },
    {
      id: 3,
      img: "https://i.ibb.co/P4CQ3gR/people3.png",
      name: "Gyeong-Hui",
      description:
        "Lorem ipsam and this is the cavity fellings station with food divarsity and the major part is AI generated coumputer ganaralized hospital which is serve batter than the other competitor",
      country: "Austrailia",
    },
  ];
  return (
    <div className="flex-col lg:flex-row my-32 mx-auto p-20" style={{
        backgroundImage: `url("https://i.ibb.co/60VB2cW/appointment.png")`,
      }}>
      <h4 className="text-lg text-primary font-bold">Appointment</h4>
      <h1 className="text-white text-4xl font-bold">
        Make an appointment Today
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="zoom-out-down">
        {testimonialData.map((info) => (
          <TestimonialsCard key={info.id} info={info}></TestimonialsCard>
        ))}
      </div>
    </div>
  );
}
