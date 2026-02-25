import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

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

window.register = function(event) {

  event.preventDefault(); // page reload stop

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    alert("Registered Successfully ✅");
    window.location.href = "login.html";
  })
  .catch((error) => {
    alert(error.message);
  });

}