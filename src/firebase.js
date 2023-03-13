import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { ToastContainer, toast } from 'react-toastify';

const firebaseConfig = {
  apiKey: "AIzaSyC6s7jGRGi2bGdRxDECwNW3ScDgnqrChAw",
  authDomain: "qit-schedular-2023.firebaseapp.com",
  projectId: "qit-schedular-2023",
  storageBucket: "qit-schedular-2023.appspot.com",
  messagingSenderId: "1046449594556",
  appId: "1:1046449594556:web:83d0f17f31e9070ff9f0b9",
  measurementId: "G-57266YVNQH",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (
  name,
  email,
  password,
  website,
  companyName,
  subject
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      website,
      companyName,
      subject,
      authProvider: "local",
      email,
    });
  } catch (err) {
    // console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("We have sent Password reset link to your Email!");
  } catch (err) {
    // console.error(err);
    alert(err.message);
  }
};

export { auth, db, registerWithEmailAndPassword, sendPasswordReset, storage };
