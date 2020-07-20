import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtq0jjaHwu4WkASgnq_mSZl9KiCIXLdrg",
  authDomain: "sudrihack-5e7cc.firebaseapp.com",
  databaseURL: "https://sudrihack-5e7cc.firebaseio.com",
  projectId: "sudrihack-5e7cc",
  storageBucket: "sudrihack-5e7cc.appspot.com",
  messagingSenderId: "982989374156",
  appId: "1:982989374156:web:4bd9178917e4f0c58d3869",
  measurementId: "G-8CFYPH8JK3"
};
// Initialize Firebase
class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.firestore();
    }

    // *** Auth API *** 
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;