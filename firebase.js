import { initializeApp } from 'firebase/app'
import { getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDD3GITL12tqq4fJY5MJSRa2ipqczYekXg',
  authDomain: 'react-notes-3203b.firebaseapp.com',
  projectId: 'react-notes-3203b',
  storageBucket: 'react-notes-3203b.appspot.com',
  messagingSenderId: '1077979338304',
  appId: '1:1077979338304:web:11bf22c833462381f131a5',
}


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const notesCollection = collection(db, 'notes')