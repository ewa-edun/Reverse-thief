import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerSupportScam() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate Gemini AI feedback for social engineering trap
    setFeedback("Gemini Bot: Revealing personal information, like your mother's maiden name, is risky. Always verify the identity of support agents before sharing sensitive details.");
    setSubmitted(true);
  };

  return (
    <div className="scam-page">
      <h1 className="scam-header">Fake Customer Support Chat</h1>
      {!submitted ? (
        <>
          <p className="scam-description">
            A support agent asks: "For verification, please provide your mother's maiden name." Type your response below.
          </p>
          <form onSubmit={handleSubmit} className="scam-form">
            <input 
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your answer"
              className="scam-input"
              required
            />
            <button type="submit" className="scam-button">Submit</button>
          </form>
        </>
      ) : (
        <>
          <div className="ai-chat">
            <p>{feedback}</p>
          </div>
          <div className="home-leaderboard-container">
            <button onClick={() => navigate('/home')} className="home-leaderboard-button">Home</button>
            <button onClick={() => navigate('/leaderboard')} className="home-leaderboard-button">Leaderboard</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CustomerSupportScam;