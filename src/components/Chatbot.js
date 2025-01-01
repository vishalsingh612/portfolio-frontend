import React, { useState } from "react";
import axios from "axios";
import { AiOutlineQuestionCircle } from "react-icons/ai"; 
import "./Chatbot.css";

function Chatbot() {
  const [userInput, setUserInput] = useState("");
  const [chatbotResponse, setChatbotResponse] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium", 
        {
          inputs: userInput,
        },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      // Extract and set the response
      const response = res.data[0].generated_text.trim();
      setChatbotResponse(response);
    } catch (error) {
      console.error("Error getting chatbot response:", error);
      setChatbotResponse("Sorry, I couldn't understand that.");
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      {/* Floating Question Icon */}
      <div className="chatbot-icon" onClick={toggleChat}>
        <AiOutlineQuestionCircle className="chatbot-icon-symbol" />
      </div>

      {/* Chat Popup */}
      {isChatOpen && (
        <div className="chat-popup">
          <h3 className="chat-title">Ask about me</h3>
          <form onSubmit={handleSubmit} className="chat-form">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask about work experience, skills, projects, etc."
              className="chat-input"
            />
            <button type="submit" className="chat-submit-btn">
              Ask
            </button>
          </form>
          {chatbotResponse && (
            <div className="chat-response">
              <h4>Response:</h4>
              <p>{chatbotResponse}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Chatbot;
