import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";

import { firebaseConfig } from "./configs/loadenv";

console.log("LFG! 🔥");

const app = initializeApp(firebaseConfig);

// Check env vars are available
for (const key in firebaseConfig) {
  if (firebaseConfig[key as keyof typeof firebaseConfig] === undefined) {
    throw Error(`${key} is not defined`);
  }
}


