// Firebase configuration
// TODO: Replace with your actual Firebase config values
const firebaseConfig = {
    apiKey: "AIzaSyBvzBWLjedjX5vvCyEXK0o_y_RNDYB_sKY",
    authDomain: "web-profile-7de90.firebaseapp.com",
    projectId: "web-profile-7de90",
    storageBucket: "web-profile-7de90.firebasestorage.app",
    messagingSenderId: "926040872895",
    appId: "1:926040872895:web:5e40113d5eb058c9a0330a",
    measurementId: "G-DQ8LE9ZJE8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = firebase.analytics();

// Export for use in other scripts
window.FirebaseAnalytics = analytics;

