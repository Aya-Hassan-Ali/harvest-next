"use client";
import React, { useState, useEffect } from 'react';

const ChatBotButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [connectionError, setConnectionError] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setConnectionError(false);
  };

  const handleIframeError = () => {
    setConnectionError(true);
  };

  const popupStyle: React.CSSProperties = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const popupContentStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    width: '90%',
    maxWidth: '800px',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const errorMessageStyle: React.CSSProperties = {
    padding: '20px',
    color: 'red',
    textAlign: 'center',
  };

  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    cursor: 'pointer',
    zIndex: 1001,
    background: 'none',
    border: 'none',
    padding: '0',
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#2ab939',
    color: 'white',
    padding: '12px 16px',
    borderRadius: '8px 8px 0 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const closeButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
  };

  const iframeStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    border: 'none',
  };

  return (
    <div>
      <button onClick={togglePopup} style={buttonStyle}>
        <img 
          src="/assets/img/icon/chatbot1.svg" 
          alt="Chatbot" 
          width="80" 
          height="80"
        />
      </button>

      {showPopup && (
        <div style={popupStyle}>
          <div style={popupContentStyle}>
            <div style={headerStyle}>
              <h3 style={{ margin: '0', fontSize: '18px' }}>Chatbot Assistant</h3>
              <button onClick={togglePopup} style={closeButtonStyle}>
                ×
              </button>
            </div>
            
            {connectionError ? (
              <div style={errorMessageStyle}>
                <p>Could not connect to chatbot service.</p>
                <p>Please try again later or contact support.</p>
                <button onClick={togglePopup}>Close</button>
              </div>
            ) : (
              <iframe
                src="http://20.199.89.99:7289/"
                style={iframeStyle}
                title="Chatbot"
                allow="microphone"
                onError={handleIframeError}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotButton;