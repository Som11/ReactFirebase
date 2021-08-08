import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBPhlIVu0y0DdHSiBQBjBXZJzhmb_rnL8E",
  authDomain: "reactandfirebase-2c76d.firebaseapp.com",
  projectId: "reactandfirebase-2c76d",
  storageBucket: "reactandfirebase-2c76d.appspot.com",
  messagingSenderId: "826357030956",
  appId: "1:826357030956:web:bba12633d9c2097dcdf189",
};
// Initialize Firebase
const firebaseAuth = firebase.initializeApp(firebaseConfig);

export default firebaseAuth;
