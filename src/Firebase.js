import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0vNdzWm2Ahg02dwXdgd-6s2ztk9aMSFI",
  authDomain: "img-haven.firebaseapp.com",
  projectId: "img-haven",
  storageBucket: "img-haven.appspot.com",
  messagingSenderId: "276093328312",
  appId: "1:276093328312:web:0ef0b3969eddd0d81a8d4d",
};

const app = initializeApp(firebaseConfig);

export const database = getAuth(app);
