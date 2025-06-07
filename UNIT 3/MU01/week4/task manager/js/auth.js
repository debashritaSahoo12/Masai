import {
  auth,
  db
} from "../firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
import {
  doc,
  getDoc, setDoc
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  let loginBtn = document.getElementById("login-btn");
  let signup = document.getElementById("signup-btn");
  let logoutBtn = document.getElementById("logoutBtn");
  let msg = document.getElementById("login-msg");

  // Login 
  if (loginBtn) {
    loginBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      let email = document.getElementById("login-email").value;
      let password = document.getElementById("login-password").value;
      if (!email || !password) {
        msg.innerText = "Both fields are required !";
        return;
      }
      try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "tasks.html";
      } catch (error) {
        msg.innerText = "Oops! ❌ Incorrect email or password.";
      }
    });
  }

  // SignUp 
  if (signup) {
    signup.addEventListener("click", async (e) => {
      e.preventDefault();
      let mail = document.getElementById("signup-email").value;
      let password = document.getElementById("signup-password").value;
      if (!mail || !password) {
        msg.innerText = "Both fields are required !";
        return;
      }
      try {
        let usersCred = await createUserWithEmailAndPassword(auth, mail, password);
        await setDoc(doc(db, "users", usersCred.user.uid), { mail, password });
        window.location.href = "index.html";
      }
      catch (error) {
        let message = "";
        switch (error.code) {
          case 'auth/email-already-in-use':
            message = "📧 This email is already registered. Try logging in!";
            break;
          case 'auth/invalid-email':
            message = "❗ Please enter a valid email address.";
            break;
          case 'auth/weak-password':
            message = "🔐 Password should be at least 6 characters.";
            break;
          default:
            message = "😵 Something went wrong. Please try again.";
        }
        document.getElementById('signup-msg').innerText = message;
      }
    })
  }


  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      await signOut(auth)
      window.location.href = "index.html";
    })
  }
});