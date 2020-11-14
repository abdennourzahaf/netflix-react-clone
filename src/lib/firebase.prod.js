import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD5uE7VclRIbb9B88dByqse4xJJmQU5Bps',
  authDomain: 'netflix-clone-5f7d9.firebaseapp.com',
  databaseURL: 'https://netflix-clone-5f7d9.firebaseio.com',
  projectId: 'netflix-clone-5f7d9',
  storageBucket: 'netflix-clone-5f7d9.appspot.com',
  messagingSenderId: '784092847102',
  appId: '1:784092847102:web:f52a63802339c6e7f8beaf',
  measurementId: 'G-T4R60MXWYC',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
