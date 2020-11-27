import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-7Rtfff3J85B1Onc_Kfwgk5C9T2W69CM',
  authDomain: 'where-s-waldo-top.firebaseapp.com',
  databaseURL: 'https://where-s-waldo-top.firebaseio.com',
  projectId: 'where-s-waldo-top',
  storageBucket: 'where-s-waldo-top.appspot.com',
  messagingSenderId: '910573727684',
  appId: '1:910573727684:web:16e30962ee4461366bfe91',
  measurementId: 'G-6K7H37LHX9',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
