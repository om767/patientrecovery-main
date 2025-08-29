import React from "react";
import "./PatientTimeline.css";

const PatientTimeline = () => {
  const timelineData = [
    {
      day: "Day 1",
      title: "Initial Checkup",
      message: "Pain level recorded, wound assessed, and medication started.",
      image: "https://via.placeholder.com/300x200.png?text=Day+1+Log",
    },
    {
      day: "Day 2",
      title: "Wound Photo",
      message: "Doctor reviewed wound healing progress. Dressings changed.",
      image: "https://via.placeholder.com/300x200.png?text=Day+2+Wound+Photo",
    },
    {
      day: "Day 3",
      title: "Mobility",
      message: "Started light mobility exercises. Patient walked 10 steps.",
      image: "https://via.placeholder.com/300x200.png?text=Day+3+Mobility",
    },
    {
      day: "Day 4",
      title: "Improvement",
      message: "Pain levels decreased, wound healing progressing well.",
      image: "https://via.placeholder.com/300x200.png?text=Day+4+Progress",
    },
  ];

  return (
    <div className="timeline-container">
      {/* Header */}
      <header className="timeline-header">
        <h1>Swasth Bharath at your every step</h1>
        <p className="company-message">
          Dear Patient, your journey to recovery is our priority.  
          This timeline helps you and your doctor track progress step by step.  
          Stay strong — we’re with you all the way! 💙
        </p>
      </header>

      {/* Timeline */}
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-card">
            <div className="timeline-day">{item.day}</div>
            <img src={item.image} alt={item.title} className="timeline-image" />
            <h3>{item.title}</h3>
            <p>{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientTimeline;
