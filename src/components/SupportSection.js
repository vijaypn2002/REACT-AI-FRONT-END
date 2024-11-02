import React, { useState } from 'react';

function SupportSection() {
  const [activeButton, setActiveButton] = useState('AI Sales Agents');
  const [messages, setMessages] = useState([
    { text: '👋 Hi there! How can I help?', sender: 'bot' },
    { text: "I'm sorry bot, but you're wrong.", sender: 'user' },
    { text: 'Can I talk to someone please?', sender: 'user' },
    { text: 'No problem! Let me connect you...', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.headingContainer}>
        <h2 style={styles.heading}>
          AI Sales and Customer Support Agents <br /> Tailored to Your Business.
        </h2>
        <p style={styles.subheading}>
          Yugaa AI automates sales and customer service, driving growth through <br /> human-like conversations.
        </p>
      </div>

      <div style={styles.container}>
        <div style={styles.buttonContainer}>
          {['AI Sales Agents', 'AI Customer Support Agents', 'Analytics & Insights', 'Omnichannel Communication'].map((button) => (
            <button
              key={button}
              onClick={() => setActiveButton(button)}
              style={{
                ...styles.button,
                ...(activeButton === button ? styles.activeButton : styles.inactiveButton),
              }}
            >
              {button}
            </button>
          ))}
        </div>

        <div style={styles.contentContainer}>
          <div style={styles.cardContainer}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Proactive Engagement</h3>
              <p style={styles.cardText}>
                Reach prospects with personalized messages at critical points in the buying journey.
              </p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Proactive Engagement</h3>
              <p style={styles.cardText}>
                Reach prospects with personalized messages at critical points in the buying journey.
              </p>
            </div>
          </div>

          <div style={styles.chatContainer}>
            <div style={styles.chatHeader}>Yugaa AI</div>
            <div style={styles.chatContent}>
              {messages.map((msg, index) => (
                <p key={index} style={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>{msg.text}</p>
              ))}
            </div>
            <div style={styles.chatInputContainer}>
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                style={styles.chatInput}
              />
              <button onClick={handleSendMessage} style={styles.sendButton}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#FFC7C7',
    padding: '60px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headingContainer: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    lineHeight: '1.4',
  },
  subheading: {
    fontSize: '18px',
    color: '#666',
    lineHeight: '1.5',
  },
  container: {
    backgroundColor: '#FBFBFB33', 
    padding: '40px',
    borderRadius: '20px',
    maxWidth: '1000px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '30px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '20px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    border: '1px solid #333',
  },
  activeButton: {
    backgroundColor: '#333',
    color: '#fff',
    border: '1px solid #333',
  },
  inactiveButton: {
    backgroundColor: 'transparent',
    color: '#333',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '30px',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF', // White background inside the light blue container
    borderRadius: '20px',
    padding: '20px',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    border: '1px solid #ddd',
    maxWidth: '300px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '14px',
    color: '#555',
  },
  chatContainer: {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    maxWidth: '300px',
  },
  chatHeader: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  chatContent: {
    padding: '10px',
    color: '#333',
    maxHeight: '200px',
    overflowY: 'auto',
  },
  userMessage: {
    backgroundColor: '#f3e5f5',
    padding: '5px',
    borderRadius: '5px',
    margin: '5px 0',
  },
  botMessage: {
    backgroundColor: '#f1f1f1',
    padding: '5px',
    borderRadius: '5px',
    margin: '5px 0',
  },
  chatInputContainer: {
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #ddd',
    padding: '5px',
  },
  chatInput: {
    flex: 1,
    border: 'none',
    padding: '10px',
    outline: 'none',
  },
  sendButton: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  // Responsive styles
  '@media (max-width: 768px)': {
    contentContainer: {
      flexDirection: 'column',
      padding: '20px',
      width: '100%',
    },
    buttonContainer: {
      width: '100%',
      justifyContent: 'center',
    },
    cardContainer: {
      width: '100%',
      alignItems: 'center',
    },
    chatContainer: {
      width: '100%',
    },
  },
};

export default SupportSection;
