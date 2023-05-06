import React from "react";

export default function AppointmentOption({ option, setTreatment }) {
  const { name, slots } = option;
  return (
    <div>
      <div className="card w-96 mx-auto m-6 shadow-xl">
        <div className="card-body items-center text-center">
          <h3 className="card-title text-3xl text-primary">{name}</h3>
          <p className="text-xl">{ slots.length > 0 ? slots[0] : "Try another day"}</p>
          <p className="text-xl border-2 rounded-lg border-emerald-400 p-2 m-3">{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
          <div className="card-actions">
            <label onClick={()=> setTreatment(option)} htmlFor="booking-modal" className="btn btn-primary">Book Appointment</label>
          </div>
        </div>
      </div>
    </div>
  );
}
