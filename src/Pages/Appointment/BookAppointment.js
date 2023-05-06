import React from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function BookAppointment({selected, setSelected}) {

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p className="border-2 rounded-xl border-primary p-5 text-center text-2xl w-96">{format(selected, "PP")}</p>;
  }
  return (
    <div style={{
      backgroundImage: `url("https://i.ibb.co/Zh2hvd8/bg.png")`,
    }}>
      <div className="text-center mt-12 my-10">
        <h3 className="text-3xl font-bold text-primary uppercase">
          Book Your Appointment
        </h3>
        <h2 className="text-5xl">Please select your appointment date</h2>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/gdZBL3s/chair.png"
            className="mx-16 max-w-lg max-w-sm rounded-lg shadow-2xl"
            alt="chair"
          />
          <div className="text-2xl">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={footer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
