import { Route, Routes } from "react-router-dom";
import './App.css'
import Initial from './Components/Initial'
import Home from './Components/Home';
import LoginScam from './Components/LoginScam'
import EmailScam from './Components/EmailScam'
import CustomerSupportScam from './Components/CustomerSupportScam'
import GiveawayScam from './Components/GiveawayScam'
import Leaderboard from './Components/Leaderboard'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loginscam" element={<LoginScam />} />
          <Route path="/emailscam" element={<EmailScam />} />
          <Route path="/customersupportscam" element={<CustomerSupportScam />} />
          <Route path="/giveawayscam" element={<GiveawayScam />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App
