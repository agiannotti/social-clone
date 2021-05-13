import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAVzDfid27KWm2uRnD0iygG0RTm9sT0Kf8',
  authDomain: 'socials-ec27f.firebaseapp.com',
  projectId: 'socials-ec27f',
  storageBucket: 'socials-ec27f.appspot.com',
  messagingSenderId: '519127851829',
  appId: '1:519127851829:web:58f17bb0994105a80b627c',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
