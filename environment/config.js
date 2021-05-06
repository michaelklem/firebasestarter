import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
apiKey: "AIzaSyA32lR4qFT5DtJoSRD778YT4pFbbrzTLM8",
authDomain: "fir-starter-2653e.firebaseapp.com",
storageBucket: "fir-starter-2653e.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();

