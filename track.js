import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const app = initializeApp({
  apiKey: "AIzaSyBpn16zqfxH_D4WwLtuAwDGQdQ3-qMsdCc",
  authDomain: "civic-issue-reporting-to-b6f3d.firebaseapp.com",
  projectId: "civic-issue-reporting-to-b6f3d"
});

const db = getFirestore(app);

window.trackComplaint = async () => {
  const mobile = document.getElementById("mobile").value;
  const result = document.getElementById("result");

  const snap = await getDocs(
    query(collection(db, "complaints"), where("mobile", "==", mobile))
  );

  result.innerHTML = snap.empty
    ? "No complaint found!"
    : "Status: " + snap.docs[0].data().status;
};
