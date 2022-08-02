const firebaseConfig = {
    apiKey: "AIzaSyCn9gmqqguJ8M-VXAVXN6uHw5wZuTX6t-M",
    authDomain: "kwitter-fab83.firebaseapp.com",
    databaseURL: "https://kwitter-fab83-default-rtdb.firebaseio.com",
    projectId: "kwitter-fab83",
    storageBucket: "kwitter-fab83.appspot.com",
    messagingSenderId: "574816932313",
    appId: "1:574816932313:web:afbf61a43b5319760289c8"
  };
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function Send() 
{
      msg = document.getElementById("msg").value;
      firebase.databse().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = " ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
   firebase_message_id = childKey;
   message_data = childData;
//Start code

//End code
} });  }); }
getData();

function logout() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}    