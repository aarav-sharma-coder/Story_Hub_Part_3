import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBgJrQDBPML4OLikjOMuPJ6ExzWcY6KMrk",
  authDomain: "story-hub-26abe.firebaseapp.com",
  databaseURL: "https://story-hub-26abe.firebaseio.com",
  projectId: "story-hub-26abe",
  storageBucket: "story-hub-26abe.appspot.com",
  messagingSenderId: "858279587192",
  appId: "1:858279587192:web:dcc766a82e93ca05926c8d"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()      