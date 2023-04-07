import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCkFCg-dbgGGutGQZj_1n4QZYFEHT09HhE",
  authDomain: "project-60-460d2.firebaseapp.com",
  databaseURL: "https://project-60-460d2-default-rtdb.firebaseio.com",
  projectId: "project-60-460d2",
  storageBucket: "project-60-460d2.appspot.com",
  messagingSenderId: "232514283072",
  appId: "1:232514283072:web:3aa2c4d0c3c1ae82fbe1a5"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()