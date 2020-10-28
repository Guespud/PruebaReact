import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAbcGF-Q9qPGOTIQMWeZuy0sQPWjjivyI4",
  authDomain: "pruebaolsoftware-a2125.firebaseapp.com",
  databaseURL: "https://pruebaolsoftware-a2125.firebaseio.com",
  projectId: "pruebaolsoftware-a2125",
  storageBucket: "pruebaolsoftware-a2125.appspot.com",
  messagingSenderId: "26409706532",
  appId: "1:26409706532:web:9cdaa3abe410b9faf6a4b1",
  measurementId: "G-HGG2QD0R7B"
};


// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
