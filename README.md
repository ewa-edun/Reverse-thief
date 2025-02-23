# Reverse-thief
# **Reverse Thief**, your chaotic-good cybersecurity troll bot.  

## **Concept:**  
Reverse Thief is an interactive phishing awareness game that flips the script on scammers. Players take on the role of a cybercriminal to understand how phishing attacks work while learning real-world cybersecurity defenses. Think of it as **"ethical scamming for education."** 

---

## **Tech Stack:**  
- **Frontend:** React and Vanilla CSS (for a clean, interactive phishing simulation)  
- **Database:** Firebase Firestore (to store user responses & analytics)  
- **AI:** GEMINI (to generate personalized scam question and feedback messages)  

---

## **Key Features:**  
1. **Scam Pages Generator:**  
   - Generate realistic UI but with intentional flaws (weird domain, bad SSL, etc.).  
   
#### **A. Classic Fake Login Page (Warm-up Scam)**  
- Mimic common scammy login pages (banking, social media, email). 
- The user lands on a **realistic-looking phishing site** (e.g., “FakeBank” or “InstaHack”).  
- They enter fake credentials → BAM, they get exposed.  

#### **B. Email Scam Simulator (Phishing Inbox)**  
- Users are presented with **a fake email inbox** full of sketchy emails.  
- They must **choose which email to open** (some are safe, some are scams).  
- If they click a scam email, it "steals" their data and explains why they failed. 
- Possible emails:
 “Your PayPal account has been compromised! Click here to verify.”
 “Exclusive job offer from CEO of Google! No interview needed.” 

#### **C. Fake Customer Support Chat (Social Engineering Test)**  
- Users are put in a chat with a **fake “support agent” (bot)** who tries to extract personal info.  
- The bot asks trick questions: *“I see you forgot your password. Can you tell me your mother’s maiden name?”*  
- If they give up personal info, they lose the round.  
   "Oops! You just got socially engineered. Here's why this was a trap…"

#### **D. Fake Giveaway / Free Wi-Fi Scam (Too-Good-to-Be-True Test)**  
- A pop-up says: **“Congrats! You won a free iPhone. Click to claim!”**  
- If they fall for it, they get a **fake malware warning** and learn how real scams work.  
  - Users are shown a tempting pop-up ad:
      “You won a free iPhone! Click to claim.”
  - Clicking it triggers:
      “Nice try. In real life, clicking this could install malware.”
---

2. **Phishing Awareness Bot:**  
   - After they "submit" fake credentials, trigger a **"Gotcha!"** screen.  
   - “Congratulations! You’ve just given away your password for free! Here's how this works in real life…”
   - Explain **what they did wrong** (e.g., "You didn’t check the URL, you ignored spelling errors").  
   - Offer tips & interactive lessons (e.g., spotting real scams).  

3. **Leaderboard of Shame (Optional for Fun)**  
   - Show anonymized stats: *"82% of users fell for this scam!"*  
   - Make it engaging with gamified feedback.  
   - Users start with a Cyber IQ score of 100 and each scam they fall for lowers their score.

---

## **How to Build It:**  

### **1. Frontend (React)**
- Create a **phishing simulation page** (fake login UI).  
- When the user enters info, don’t store real credentials—just log the mistakes.  
- Redirect to an **educational page** explaining the scam.  


### **2. Database (Firestore/)**
- Log phishing tactics users fall for most.  

---

## **Bonus Features:**  
✅ **Live Phishing Detector** – Let users paste emails/URLs to check if they’re scams.  
✅ **Chrome Extension** – Highlight phishing risks in real-time.  

---

## Future Enhancements
- **Expanded Scam Types:** Include more phishing tactics like fake job offers and tech support scams.
- **Real-World Case Studies:** Incorporate real phishing incidents for analysis.

---

## **Deployment:**  
- **Frontend**: Vercel 
- **Database**: Firebase 

---

You build a **fake phishing scam**, users get tricked, then you roast them with cybersecurity lessons. It's chaotic, ethical, and useful.  

---