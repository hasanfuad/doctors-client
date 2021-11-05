import React from "react";

const AppointmentShortList = ({ appointment }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="" scope="col">
              Name
            </th>
            <th className="" scope="col">
              Phone
            </th>
            <th className="" scope="col">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {appointment.map((appointment) => (
            <tr>
              <td className="">{appointment.name}</td>
              <td className="">{appointment.phone}</td>
              <td className="">{appointment.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentShortList;
