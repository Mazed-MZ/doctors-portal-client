import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useQuery } from "react-query";

export default function Sidebar() {

  const {user} = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    query: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
  })

  return (
    <div>
      <h3 className="text-3xl m-6">My Appointments</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              bookings.map((booking, i) => <tr key={booking._id}>
              <th>{i+1}</th>
              <td>{booking.patient}</td>
              <td>{booking.treatment}</td>
              <td>{booking.appointmentDate}</td>
              <td>{booking.slot}</td>
            </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
