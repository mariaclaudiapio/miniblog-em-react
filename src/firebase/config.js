import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBuvBVY5XBzSU-5dxpkbX7lT_llSbCgP_U",
  authDomain: "miniblog-e1ea0.firebaseapp.com",
  projectId: "miniblog-e1ea0",
  storageBucket: "miniblog-e1ea0.appspot.com",
  messagingSenderId: "884341031382",
  appId: "1:884341031382:web:eac1919add54db377be477"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }