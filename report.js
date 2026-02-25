import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBpn16zqfxH_D4WwLtuAwDGQdQ3-qMsdCc",
  authDomain: "civic-issue-reporting-to-b6f3d.firebaseapp.com",
  projectId: "civic-issue-reporting-to-b6f3d",
  storageBucket: "civic-issue-reporting-to-b6f3d.firebasestorage.app",
  messagingSenderId: "442755472602",
  appId: "1:442755472602:web:d819b368244377072f59e3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.submitComplaint = async function() {
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;
  const location = document.getElementById("location").value;

  try {
    await addDoc(collection(db, "complaints"), {
      name: name,
      mobile: mobile,
      title: title,
      category: category,
      description: description,
      location: location,
      status: "Pending",
      date: new Date()
    });

    document.getElementById("msg").innerHTML = "Report issue successfully ✅";

    // Clear form after submit
    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("description").value = "";
    document.getElementById("location").value = "";
    document.getElementById("image").value = "";

  } catch (error) {
    alert("Error: " + error.message);
  }
}