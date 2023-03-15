import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPkNPKdIIukSnfXJaiim57h69woiS4W6I",
  authDomain: "van-life-c7117.firebaseapp.com",
  projectId: "van-life-c7117",
  storageBucket: "van-life-c7117.appspot.com",
  messagingSenderId: "795983368656",
  appId: "1:795983368656:web:c26d2e50bba00b6604a9d5",
  measurementId: "G-KN7QBCXSZ7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
