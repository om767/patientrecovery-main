import React, { useState } from "react";
import "./DoctorDashboard.css";

function DoctorDashboard() {
  // Dummy doctor name
  const doctorName = "Dr. Arjun Mehta";

  // Dummy patient data (realistic Indian names + data)
  const patients = [
    {
      id: 1,
      name: "Ravi Kumar",
      age: 42,
      logs: [
        { date: "2025-08-25", pain: 7, medication: true, photo: "https://via.placeholder.com/100" },
        { date: "2025-08-26", pain: 6, medication: true, photo: "https://via.placeholder.com/100" },
        { date: "2025-08-27", pain: 4, medication: false, photo: "https://via.placeholder.com/100" },
      ],
      alerts: ["High pain level reported on 25 Aug"],
    },
    {
      id: 2,
      name: "Asha Reddy",
      age: 35,
      logs: [
        { date: "2025-08-26", pain: 3, medication: true, photo: "https://via.placeholder.com/100" },
        { date: "2025-08-27", pain: 2, medication: true, photo: "https://via.placeholder.com/100" },
      ],
      alerts: [],
    },
  ];

  const [selectedPatient, setSelectedPatient] = useState(patients[0]);

  return (
    <div className="doctor-dashboard">
      {/* Header */}
      <header className="doctor-header">
        <h1>Welcome, {doctorName}</h1>
        <p>Patient Monitoring Dashboard</p>
      </header>

      <div className="doctor-body">
        {/* Left panel - Patient List */}
        <aside className="patient-list">
          <h2>Patients</h2>
          <ul>
            {patients.map((p) => (
              <li
                key={p.id}
                onClick={() => setSelectedPatient(p)}
                className={selectedPatient.id === p.id ? "active" : ""}
              >
                {p.name} ({p.age} yrs)
              </li>
            ))}
          </ul>
        </aside>

        {/* Right panel - Patient Detail */}
        <main className="patient-details">
          <h2>Patient Details: {selectedPatient.name}</h2>

          {/* Alerts */}
          {selectedPatient.alerts.length > 0 && (
            <div className="alerts">
              <h3>⚠ Alerts</h3>
              {selectedPatient.alerts.map((a, i) => (
                <p key={i}>{a}</p>
              ))}
            </div>
          )}

          {/* Latest Log */}
          <section className="latest-log">
            <h3>Latest Log</h3>
            <p><strong>Date:</strong> {selectedPatient.logs[0].date}</p>
            <p><strong>Pain Level:</strong> {selectedPatient.logs[0].pain}/10</p>
            <p><strong>Medication:</strong> {selectedPatient.logs[0].medication ? "Yes" : "No"}</p>
            <img
              src={selectedPatient.logs[0].photo}
              alt="Wound"
              className="wound-photo"
            />
          </section>

          {/* Patient History */}
          <section className="history">
            <h3>History</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Pain Level</th>
                  <th>Medication</th>
                  <th>Photo</th>
                </tr>
              </thead>
              <tbody>
                {selectedPatient.logs.map((log, i) => (
                  <tr key={i}>
                    <td>{log.date}</td>
                    <td>{log.pain}</td>
                    <td>{log.medication ? "Yes" : "No"}</td>
                    <td>
                      <img src={log.photo} alt="log" className="small-photo" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}

export default DoctorDashboard;
