import dotenv from "dotenv";

(function loadEnv() {
  // Load environment variables based on NODE_ENV
  if (process.env.NODE_ENV === "production") {
    dotenv.config(); // This will load from default .env file
  } else {
    dotenv.config({ path: [".env.staging.local", "env.local"] });
  }
})();

export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
