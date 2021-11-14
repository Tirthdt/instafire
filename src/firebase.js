import { getStorage } from "@firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBQmhFBsAybmoMiXHCg31wC3cDuaeQutWA",
  authDomain: "firegram-119b4.firebaseapp.com",
  projectId: "firegram-119b4",
  databaseURL:
    "https://firegram-119b4-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "firegram-119b4.appspot.com",
  messagingSenderId: "758669360874",
  appId: "1:758669360874:web:26e9966d021775c7272193",
});

const firebaseAuth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const realdb = getDatabase();

export { firebaseAuth, db, storage, realdb };
