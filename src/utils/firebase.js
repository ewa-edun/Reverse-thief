import { getFirestore, collection, addDoc, query, orderBy, getDocs } from 'firebase/firestore';
import { limit as firestoreLimit } from 'firebase/firestore';
import app from '../firebase';

const db = getFirestore(app);

export async function saveUserScore(username, scamType, score, totalQuestions) {
  try {
    const scoreData = {
      username,
      scamType,
      score,
      totalQuestions,
      timestamp: new Date(),
      percentage: (score / totalQuestions) * 100
    };
    
    await addDoc(collection(db, 'scores'), scoreData);
  } catch (error) {
    console.error('Error saving score:', error);
  }
}

export async function getTopScores(limitCount = 10) {
  try {
    const scoresRef = collection(db, 'scores');
    const q = query(
      scoresRef, 
      orderBy('percentage', 'desc'), 
      firestoreLimit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting scores:', error);
    return [];
  }
}
