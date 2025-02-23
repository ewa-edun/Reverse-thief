import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GiveawayScam() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ claim: '' });
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate Gemini AI feedback for giveaway trap
    setFeedback("Gemini Bot: Free giveaways are often a lure to collect your personal data. Always verify the legitimacy of such prizes.");
    setSubmitted(true);
  };

  return (
    <div className="scam-page">
      <h1 className="scam-header">Fake Giveaway Scam</h1>
      {!submitted ? (
        <>
          <p className="scam-description">
            Congratulations! You have been selected to win a free iPhone. Enter your claim code to redeem your prize.
          </p>
          <form onSubmit={handleSubmit} className="scam-form">
            <input
              type="text"
              name="claim"
              placeholder="Enter Claim Code"
              value={formData.claim}
              onChange={handleChange}
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

export default GiveawayScam;