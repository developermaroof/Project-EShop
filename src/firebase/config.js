import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAvV1tI5gNbIFIGg85wlDk2nRrfCzJta_k",
  authDomain: "eshop-888a3.firebaseapp.com",
  projectId: "eshop-888a3",
  storageBucket: "eshop-888a3.appspot.com",
  messagingSenderId: "409966134320",
  appId: "1:409966134320:web:920d1bc947b40c744959f5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
