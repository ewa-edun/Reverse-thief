import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { generateScamQuestions, getPersonalizedFeedback } from '../utils/gemini';
import { saveUserScore } from '../utils/firebase';

function EmailScam() {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username || "Anonymous";
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    async function loadQuestions() {
      const generatedQuestions = await generateScamQuestions('email');
      if (generatedQuestions) {
        setQuestions(generatedQuestions);
        setLoading(false);
      }
    }
    loadQuestions();
  }, []);

  const handleAnswer = async (selectedOption) => {
    const newAnswers = [...userAnswers, selectedOption];
    setUserAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setLoading(true);
      const correctAnswers = questions.map(q => q.correctAnswer);
      const score = newAnswers.filter((a, i) => a === correctAnswers[i]).length;
      
      try {
        console.log('Saving score:', {
          username,
          scamType: 'Email Scam',
          score,
          totalQuestions: questions.length
        });
        
        await saveUserScore(username, 'Email Scam', score, questions.length);
        console.log('Score saved successfully!');
        
        const feedback = await getPersonalizedFeedback(
          'email phishing',
          newAnswers,
          correctAnswers
        );
        setFeedback(`Score saved! ${score}/${questions.length} correct.\n\n${feedback}`);
      } catch (error) {
        console.error('Error saving score:', error);
        setFeedback('Error saving score. ' + error.message);
      }
      
      setLoading(false);
      setSubmitted(true);
    }
  };

  if (loading) {
    return (
      <div className="scam-page">
        <div className="loading-container">
          <div className="loading-spinner" />
          <p className="loading-text">Analyzing Scenarios...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="scam-page">
      <h1 className="scam-header">Email Scam Simulator</h1>
      {!submitted ? (
        <>
          <div className="progress-dots">
            {[...Array(questions.length)].map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentQuestion ? 'active' : ''} ${
                  index < currentQuestion ? 'completed' : ''
                }`}
              />
            ))}
          </div>
          <p className="scam-description">
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <div className="scam-form">
            <p className="question-text">{questions[currentQuestion].question}</p>
            <div className="options-container">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="option-button"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="ai-chat">
            <p>{feedback}</p>
          </div>
          <div className="home-leaderboard-container">
            <button onClick={() => navigate('/home')} className="home-leaderboard-button">
              Home
            </button>
            <button onClick={() => navigate('/leaderboard')} className="home-leaderboard-button">
              Leaderboard
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default EmailScam;
