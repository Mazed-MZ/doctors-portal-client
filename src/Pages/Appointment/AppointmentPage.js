import React, { useState } from 'react';
import BookAppointment from './BookAppointment';
import AvailableAppointment from './AvailableAppointment';

export default function AppointmentPage() {

    const [selected, setSelected] = useState(new Date());

  return (
    <div>
      <BookAppointment selected={selected} setSelected={setSelected}></BookAppointment>
      <AvailableAppointment selected={selected}></AvailableAppointment>
    </div>
  )
}
