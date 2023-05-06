import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/loading";

export default function AvailableAppointment({selected}) {

  // const [appointment, setAppointment] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selected, 'PP');

  const {data:appointmentsOption = [], refetch, isLoading} = useQuery({
    queryKey: ['appointmentsOption', date],
    queryFn: () => fetch(`http://localhost:5000/appointmentsOption?date=${date}`)
    .then(res => res.json())
  })

  if(isLoading){
    return <Loading></Loading>
  }

  // useEffect( ()=>{
  //   fetch(`http://localhost:5000/appointmentsOption`)
  //   .then(res => res.json())
  //   .then(data => setAppointment(data))
  // });
  return (
    <div>
      <div className="text-center text-white mt-32 my-10 border-8 rounded-lg p-5 bg-gradient-to-r from-cyan-950 to-cyan-500">
        <h2 className="text-3xl">Appointment available on <span className="font-bold">{format(selected, "PP")}</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          appointmentsOption.map(option => <AppointmentOption key={option._id} option={option} setTreatment={setTreatment}></AppointmentOption>)
        }
      </div>
      {treatment && <BookingModal refetch = {refetch} selected={selected} treatment={treatment}></BookingModal>}
    </div>
  );
}
