import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD5fTCYHBk6pYCQq5ACIT0tpVo5HK8eB_0',
  authDomain: 'full-f5a01.firebaseapp.com',
  databaseURL: 'https://full-f5a01.firebaseio.com',
  projectId: 'full-f5a01',
  storageBucket: 'full-f5a01.appspot.com',
  messagingSenderId: '331491644752',
  appId: '1:331491644752:web:133046a283f9264e37c855',
  measurementId: 'G-B1N4Q87EDZ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
