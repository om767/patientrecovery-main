import React, { useState } from "react";
import "./PatientDashboard.css";

const PatientDashboard = () => {
  const [name] = useState("Rajesh Kumar"); // Dummy patient name
  const [painLevel, setPainLevel] = useState(5);
  const [medication, setMedication] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [logs, setLogs] = useState([
    {
      date: "2025-08-25",
      painLevel: 6,
      medication: "Yes",
      notes: "Felt better after walk in Cubbon Park.",
    },
    {
      date: "2025-08-26",
      painLevel: 4,
      medication: "No",
      notes: "Skipped dose due to travel from Bengaluru to Mysuru.",
    },
    {
      date: "2025-08-27",
      painLevel: 7,
      medication: "Yes",
      notes: "Severe back pain after long bike ride.",
    },
  ]);

  const [notes, setNotes] = useState("");

  // Handle photo upload
  const handlePhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLog = {
      date: new Date().toISOString().split("T")[0],
      painLevel,
      medication: medication ? "Yes" : "No",
      notes: notes || "No additional notes.",
    };
    setLogs([newLog, ...logs]);
    setNotes("");
    setPhoto(null);
    alert("Today's log submitted successfully ✅");
  };

  return (
    <div className="patient-dashboard">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="animate-fade">👋 Welcome, {name}!</h1>
        <p className="animate-slide">Your personalized patient dashboard</p>
      </section>

      {/* Daily Log Form */}
      <div className="card">
        <h2>Your Daily Log</h2>
        <form onSubmit={handleSubmit} className="log-form">
          {/* Pain Level Slider */}
          <label>
            Pain Level: <strong>{painLevel}</strong>
            <input
              type="range"
              min="1"
              max="10"
              value={painLevel}
              onChange={(e) => setPainLevel(Number(e.target.value))}
            />
          </label>

          {/* Medication Toggle */}
          <label className="toggle">
            <input
              type="checkbox"
              checked={medication}
              onChange={() => setMedication(!medication)}
            />
            Took Medication?
          </label>

          {/* Notes */}
          <label>
            Notes:
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write about your day..."
            />
          </label>

          {/* Photo Upload */}
          <label>
            Upload Photo:
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
          </label>
          {photo && (
            <div className="photo-preview">
              <img src={photo} alt="Preview" />
            </div>
          )}

          <button type="submit" className="submit-btn">
            Submit Log
          </button>
        </form>
      </div>

      {/* Recovery Progress */}
      <div className="card">
        <h2>Your Recovery Progress</h2>
        <ul className="logs-list">
          {logs.map((log, index) => (
            <li key={index}>
              <strong>{log.date}</strong> — Pain Level: {log.painLevel}, Meds:{" "}
              {log.medication}
              <br />
              <em>{log.notes}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientDashboard;
