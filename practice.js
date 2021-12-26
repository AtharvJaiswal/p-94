
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyA3LY4pwktqzEHXVVWVcbB-GqBILa0mc3U",
    authDomain: "kwitter-ebae1.firebaseapp.com",
    databaseURL: "https://kwitter-ebae1-default-rtdb.firebaseio.com",
    projectId: "kwitter-ebae1",
    storageBucket: "kwitter-ebae1.appspot.com",
    messagingSenderId: "840089149424",
    appId: "1:840089149424:web:e9a0389473ac354e894735"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }