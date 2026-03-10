// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBijFixbOHIXs7R1kYZ0SAKivKM3F-SE8E",
  authDomain: "kaakzz-123.firebaseapp.com",
  projectId: "kaakzz-123",
  storageBucket: "kaakzz-123.firebasestorage.app",
  messagingSenderId: "793146457085",
  appId: "1:793146457085:web:ec8f6315a17bc144307794"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Export auth so other files can use it
export { auth };