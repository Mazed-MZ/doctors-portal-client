import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

export default function BookingModal({ treatment, selected, setTreatment, refetch }) {
  const { name, slots } = treatment;
  const date = format(selected, "PP");
  const { user } = useContext(AuthContext);
  // const navigate = useNavigate();

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slots.value;
    const fullname = form.fullname.value;
    const phone = form.phone.value;
    const email = form.email.value;
    // [3, 4, 5].map((value, i) => console.log(slot)
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: fullname,
      email,
      slot,
      phone,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // setTreatment(null);
          toast.success("Booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-3xl font-bold">{name}</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="mx-auto text-center">
            <form onSubmit={handleBooking}>
              <input
                type="text"
                name="date"
                value={date}
                disabled
                className="my-2 text-center text-xl input input-bordered input-info w-full max-w-xs"
              />
              <select
                className="select select-info w-full max-w-xs"
                name="slots"
              >
                {slots.map((slot) => (
                  <option selected value={slot} className="text-center text-xl">
                    {slot}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Full name"
                name="fullname"
                className="text-center text-xl my-2 input input-bordered input-info w-full max-w-xs"
                defaultValue={user?.displayName}
                disabled
              />
              <input
                type="text"
                name="email" 
                value={user.email}
                className="text-center text-xl my-2 input input-bordered input-info w-full max-w-xs"
                defaultValue={user?.email}
                disabled
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                className="my-2 input text-xl text-center input-bordered input-info w-full max-w-xs"
              />
                <input
                  type="submit"
                  name="submit-btn"
                  placeholder="Type here"
                  className="my-2 text-xl text-white btn btn-primary input input-bordered input-info w-full max-w-xs" data-dismiss="modal"
                />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
