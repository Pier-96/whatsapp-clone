import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDVfjqV4HY21OKzCr0N9dX8K6RE_HpJ0mM",
  authDomain: "whatsappclone-9b350.firebaseapp.com",
  projectId: "whatsappclone-9b350",
  storageBucket: "whatsappclone-9b350.appspot.com",
  messagingSenderId: "470359497140",
  appId: "1:470359497140:web:08b5fc0d96431207d53ae1",
  measurementId: "G-BTVCM5W6MT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
