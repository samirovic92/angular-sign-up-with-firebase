
export const environment = {
  production: false,
  firebaseConfig: {
    projectId: "${FIREBASE_PROJECT_ID}",
    appId: "${FIREBASE_APP_ID}",
    storageBucket: "${FIREBASE_STORAGE_BUCKET}",
    apiKey: "${FIREBASE_API_KEY}",
    authDomain: "${FIREBASE_AUTH_DOMAIN}",
    messagingSenderId: "${FIREBASE_MESSAGING_SENDER_ID}"
  }
}
