import app from "./app.js";
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'

export async function subscribeToHellfireClub(subscription) {
    const db = getFirestore(app);
    const hellffireClubCollection = collection(db, 'hellfire-clube');
    const docRef = await addDoc(hellffireClubCollection, subscription);
    return docRef.id
}