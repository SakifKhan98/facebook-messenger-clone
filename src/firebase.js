import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB9cJ3-dFFRZZ4TT-9hHTPMo8A1eBp0OwE",
  authDomain: "facebook-messenger-clone-e38cc.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-e38cc.firebaseio.com",
  projectId: "facebook-messenger-clone-e38cc",
  storageBucket: "facebook-messenger-clone-e38cc.appspot.com",
  messagingSenderId: "951738589278",
  appId: "1:951738589278:web:4819209b865415cf60d4cf",
  measurementId: "G-2X9CHK4KCK",
});

// const db = firebaseApp.firestore();

// export default { db };

const db = firebaseApp.firestore();

export default db;
