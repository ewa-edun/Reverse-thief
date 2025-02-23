import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Initial() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      navigate('/home', { state: { username: username.trim() } });
    }
  };

  return (
    <div className="initial-container">
      <h1 className="glitch-text">REVERSE THIEF</h1>
      <p className="cyber-text">
        Welcome to the dark side of cybersecurity education.
        Are you ready to learn how hackers think... by becoming one? (You are the one being hacked)
      </p>
      <div className="warning-box">
        <p>⚠️ WARNING: This is a controlled environment designed to teach you about online security.</p>
        <p>Everything here is fake. No real data will be compromised.</p>
      </div>
      <form onSubmit={handleSubmit} className="hacker-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your codename"
          className="cyber-input"
          required
        />
        <button type="submit" className="cyber-button">
          INITIATE SEQUENCE
        </button>
      </form>
    </div>
  );
}

export default Initial;
