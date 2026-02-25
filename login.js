import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBpn16zqfxH_D4WwLtuAwDGQdQ3-qMsdCc",
  authDomain: "civic-issue-reporting-to-b6f3d.firebaseapp.com",
  projectId: "civic-issue-reporting-to-b6f3d",
  storageBucket: "civic-issue-reporting-to-b6f3d.firebasestorage.app",
  messagingSenderId: "442755472602",
  appId: "1:442755472602:web:d819b368244377072f59e3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


document.getElementById("loginForm").addEventListener("submit", async (e) => {

  e.preventDefault();

  let loginId = document.getElementById("loginId").value;
  let password = document.getElementById("password").value;

  let email = loginId;

  // 📌 अगर mobile dala hai
  if (!loginId.includes("@")) {

    const q = query(collection(db, "users"), where("mobile", "==",loginId));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      alert("Email not registered ❌");
      return;
    }

    querySnapshot.forEach((doc) => {
      email = doc.data().email;
    });

  }

  // 🔐 Login
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {

      alert("Login Successful ✅");
      window.location.href ="welcome.html";

    })
    .catch((error) => alert(error.message));

});