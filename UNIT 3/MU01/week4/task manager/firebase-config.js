import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyLgw1O6T2cx0BM7_iSEEp2SPQTmj6s1c",
  authDomain: "task-manager-ce801.firebaseapp.com",
  projectId: "task-manager-ce801",
  storageBucket: "task-manager-ce801.firebasestorage.app",
  messagingSenderId: "1011797191126",
  appId: "1:1011797191126:web:965a4ad209710605839c77",
  measurementId: "G-H8WQVV1C09",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
