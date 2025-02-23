import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state?.username || "Hacker";

    const scams = [
        {
            title: "Login Scam",
            description: "Can you spot a fake login page? Test your skills!",
            path: "/loginscam"
        },
        {
            title: "Email Phishing",
            description: "Navigate through a dangerous inbox full of traps.",
            path: "/emailscam"
        },
        {
            title: "Support Chat",
            description: "Do not fall for social engineering tactics!",
            path: "/customersupportscam"
        },
        {
            title: "Giveaway Trap",
            description: "Too good to be true? Probably is!",
            path: "/giveawayscam"
        }
    ];

    return (
        <div className="home-container">
            <div className="welcome-section">
                <h1 className="glitch-text">Welcome, {username}</h1>
                <div className="rules-box">
                    <h2>MISSION BRIEFING</h2>
                    <ul>
                        <li>You will face 4 common types of cyber scams</li>
                        <li>Each scam is designed to trick you - stay alert!</li>
                        <li>Your goal: Identify the red flags and avoid getting hacked</li>
                        <li>Learn from your mistakes - we will explain every trap</li>
                    </ul>
                </div>
            </div>
            
            <div className="scams-grid">
                {scams.map((scam, index) => (
                    <div key={index} className="scam-card">
                        <h3>{scam.title}</h3>
                        <p>{scam.description}</p>
                        <button 
                            className="cyber-button"
                            onClick={() => navigate(scam.path, { state: { username } })}
                        >
                            START MISSION
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
