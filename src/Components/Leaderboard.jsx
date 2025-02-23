import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTopScores } from '../utils/firebase';

function Leaderboard() {
  const navigate = useNavigate();
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchScores() {
      const topScores = await getTopScores();
      setScores(topScores);
      setLoading(false);
    }
    fetchScores();
  }, []);

  return (
    <div className="scam-page">
      <h1 className="scam-header">Leaderboard of Shame</h1>
      <p className="cyber-text">
        See how others fared in their battle against scams.
        Higher scores mean better detection skills!
      </p>
      
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner" />
          <p className="loading-text">Loading Scores...</p>
        </div>
      ) : (
        <div className="leaderboard-container">
          {scores.map((score, index) => (
            <div key={score.id} className="leaderboard-entry">
              <div className="rank">{index + 1}</div>
              <div className="score-details">
                <div className="username">{score.username}</div>
                <div className="scam-type">{score.scamType}</div>
              </div>
              <div className="score-value">
                {score.percentage.toFixed(0)}%
                <span className="score-fraction">
                  ({score.score}/{score.totalQuestions})
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <button 
        onClick={() => navigate('/home')} 
        className="cyber-button"
        style={{ marginTop: '2rem' }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Leaderboard;