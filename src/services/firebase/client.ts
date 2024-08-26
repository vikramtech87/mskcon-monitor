import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const currentApps = getApps();

let app: FirebaseApp | undefined = undefined;

if (currentApps.length === 0) {
  const firebaseConfig = {
    apiKey: "AIzaSyARiP4nRlKxyzypkk5y1UiKZQCDSzE1G-I",
    authDomain: "mskcon-4c14b.firebaseapp.com",
    projectId: "mskcon-4c14b",
    storageBucket: "mskcon-4c14b.appspot.com",
    messagingSenderId: "552769702652",
    appId: "1:552769702652:web:4b3c33107dfe6c3cf1a579",
  };
  app = initializeApp(firebaseConfig);
} else {
  app = currentApps[0];
}

export const auth = getAuth(app);
export const db = getFirestore(app);
