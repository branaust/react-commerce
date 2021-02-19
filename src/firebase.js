import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore';
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
})

export const auth = app.auth()
export const db = firebase.firestore()
export const projectStorage = firebase.storage()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp
db.settings({ timestampsInSnapshots: true })
export default app