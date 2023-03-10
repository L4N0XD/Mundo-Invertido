  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBv8J9a5pHxZDKn-_kBTl5NxqiYIHFBmw0",
    authDomain: "hellfire-720f1.firebaseapp.com",
    projectId: "hellfire-720f1",
    storageBucket: "hellfire-720f1.appspot.com",
    messagingSenderId: "598003016428",
    appId: "1:598003016428:web:5bd637c2648671af6e3bc9",
    measurementId: "G-G68B59M6KS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export default app;