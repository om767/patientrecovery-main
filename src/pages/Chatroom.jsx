import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./Chatroom.css";

// connect to backend server
const socket = io("http://localhost:5000");

const Chatroom = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("Patient"); // default role

  useEffect(() => {
    // Listen for incoming messages
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Cleanup listener
    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = { user: username, text: input };
    socket.emit("sendMessage", newMessage);
    setInput("");
  };

  return (
    <div className="chatroom-wrapper">
      {/* Sidebar for role selection */}
      <div className="chatroom-sidebar">
        <h3>Select Role</h3>
        <button
          className={username === "Doctor" ? "active" : ""}
          onClick={() => setUsername("Doctor")}
        >
          👨‍⚕️ Doctor
        </button>
        <button
          className={username === "Patient" ? "active" : ""}
          onClick={() => setUsername("Patient")}
        >
          🧑‍🤝‍🧑 Patient
        </button>
        <p className="current-role">
          Current: <strong>{username}</strong>
        </p>
      </div>

      {/* Main chat */}
      <div className="chatroom-container">
        {/* Header */}
        <div className="chatroom-header">
          <h2>Connect to your Doctor</h2>
          <p>
            👨‍⚕️ Dr. Sharma <span className="status-dot"></span> Online <br />
            <small>Usually available 9 AM - 8 PM</small>
          </p>
        </div>

        {/* Messages */}
        <div className="chatroom-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-bubble ${
                msg.user === username ? "patient-msg" : "doctor-msg"
              }`}
            >
              <strong>{msg.user}: </strong> {msg.text}
            </div>
          ))}
        </div>

        {/* Input box */}
        <div className="chatroom-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
