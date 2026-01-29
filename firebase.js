const firebaseConfig = {
 apiKey: "AIzaSyAnFDxyymq8WQneq7lmzU7GhUgrDgmm_pU",
  authDomain: "studentdashboard-7cb0e.firebaseapp.com",
  projectId: "studentdashboard-7cb0e",
  storageBucket: "studentdashboard-7cb0e.firebasestorage.app",
  messagingSenderId: "56579877072",
  appId: "1:56579877072:web:bce7806a43e205f73216d5"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// optional but good
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
