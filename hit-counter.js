// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6aKGPiW2XAXaRRPsy3ONz5Ea7PB_8vpQ",
    authDomain: "website-hit-counter-48d9a.firebaseapp.com",
    databaseURL: "https://website-hit-counter-48d9a-default-rtdb.firebaseio.com/",
    projectId: "website-hit-counter-48d9a",
    storageBucket: "website-hit-counter-48d9a.firebasestorage.app",
    messagingSenderId: "741429320681",
    appId: "1:741429320681:web:5a2316bb55de0f019fc978",
    measurementId: "G-2072CSTK4H",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// Hit counter reference in the database
const counterRef = firebase.database().ref('hitCounter');

// Initialize the hit counter on page load
counterRef.once('value', (snapshot) => {
    let counter = snapshot.val() || 0;

    // Increment the counter
    counter++;
    counterRef.set(counter);

    // Format the counter to always show 8 digits
    const formattedCounter = counter.toString().padStart(8, '0');

    // Display the counter
    const hitCounterElement = document.getElementById('hit-counter');
    const digits = formattedCounter.split('');
    digits.forEach((digit, index) => {
        hitCounterElement.children[index].textContent = digit;
    });
});
