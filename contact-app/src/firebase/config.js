import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBQfEeoC4mW71d9Q16uqdqH_qInNFfDmYA',
  authDomain: 'contact-app-5b1d9.firebaseapp.com',
  projectId: 'contact-app-5b1d9',
  storageBucket: 'contact-app-5b1d9.appspot.com',
  messagingSenderId: '338708099025',
  appId: '1:338708099025:web:7698a4d771d69b87bd7af0',
};

// Firebasega Config orqali ulanish!
firebase.initializeApp (firebaseConfig);

// Firebaseni Servislari
const projectFirestore = firebase.firestore ();
const projectAuth = firebase.auth ();

// TimeStamp
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, projectAuth, timeStamp};
