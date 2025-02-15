
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'



// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAWuLXaSDjz3Y8gtHVzd5A4KylmNRRHa14",
//   authDomain: "stayhub-e032b.firebaseapp.com",
//   projectId: "stayhub-e032b",
//   storageBucket: "stayhub-e032b.appspot.com",
//   messagingSenderId: "1032662371350",
//   appId: "1:1032662371350:web:c237073ec967ea61f8b937",
//   measurementId: "G-WQXLMCVHYG"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDsGLu76GZSQLpXR9WuQZz7JTY6X3EZbXw",
  authDomain: "stayhub-sriaxx.firebaseapp.com",
  projectId: "stayhub-sriaxx",
  storageBucket: "stayhub-sriaxx.firebasestorage.app",
  messagingSenderId: "175434393079",
  appId: "1:175434393079:web:80c20de12caa21d6723af2",
  measurementId: "G-KGWL13RX0N"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth =firebase.auth() 
let firestore = firebase.firestore()
export const database = {
  users: firestore.collection('users'),
  transport: firestore.collection('transport'),
  mess: firestore.collection('mess'),
  comments: firestore.collection('comments'),
  property : firestore.collection('property'),
  // getTimeStamp: firebase.firestore.FieldValue.serverTimestamp()
}

export const storage = firebase.storage()