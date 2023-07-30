import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfmZeQvaf9mNppmezX6895w6nvaMiZJak",
  authDomain: "bestflix-74c6c.firebaseapp.com",
  projectId: "bestflix-74c6c",
  storageBucket: "bestflix-74c6c.appspot.com",
  messagingSenderId: "861873622644",
  appId: "1:861873622644:web:46c1a1d3270f4feb9fcb21",
  measurementId: "G-C8KPMDFQ41",
};

const app = initializeApp(firebaseConfig);
var storage=getStorage(app);
export default storage;




