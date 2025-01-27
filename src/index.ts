import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
import {
  getStorage,
  ref,
  uploadBytes,
  StorageReference,
} from "firebase/storage";

import { firebaseConfig } from "./configs/loadenv";

// Check env vars are available
for (const key in firebaseConfig) {
  if (firebaseConfig[key as keyof typeof firebaseConfig] === undefined) {
    throw Error(`${key} is not defined`);
  }
}
console.log("LFG! 🔥");

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const functions = getFunctions(app);

// Create a reference to the bucket you want to monitor
const bucketRef = ref(storage, "your-bucket-nameTODO");

// Set up a Cloud Function to handle bucket events
// Note: You'll need to create a corresponding Cloud Function in your Firebase project
