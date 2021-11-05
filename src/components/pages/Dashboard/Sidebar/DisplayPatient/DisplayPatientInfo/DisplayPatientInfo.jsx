import React from "react";

const DisplayPatientInfo = ({ appointmentInfo }) => {
  return (
    <div>
      <table>
        <thead className="p-5">
          <tr>
            <th className="" scope="col">
              SL
            </th>
            <th className="" scope="col">
              Name
            </th>
            <th className="" scope="col">
              Phone
            </th>
            <th className="" scope="col">
              Email
            </th>
            <th className="" scope="col">
              Age
            </th>
            <th className="" scope="col">
              Weight
            </th>
          </tr>
        </thead>
        <tbody>
          {appointmentInfo.map((appointment, index) => (
            <tr>
              <td className="">{index + 1}</td>
              <td className="">{appointment.name}</td>
              <td className="">{appointment.phone}</td>
              <td className="">{appointment.email}</td>
              <td className="">{appointment.age}</td>
              <td className="">{appointment.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayPatientInfo;
