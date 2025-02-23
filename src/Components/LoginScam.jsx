import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginScam() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate Gemini API call for personalized feedback
    setFeedback("Gemini Bot: Your credentials are too obvious! Real phishing pages are much more subtle. Always check the URL for security.");
    setSubmitted(true);
  };

  return (
    <div className="scam-page">
      <h1 className="scam-header">Fake Login Scam</h1>
      {!submitted ? (
        <>
          <p className="scam-description">
            Enter your credentials to access your account.
          </p>
          <form onSubmit={handleSubmit} className="scam-form">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="scam-input"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
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

export default LoginScam;