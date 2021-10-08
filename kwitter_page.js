// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAHdu-bhLU6tyVw58VCM3CcgtbmynMselY",
      authDomain: "kwitter-6488e.firebaseapp.com",
      databaseURL: "https://kwitter-6488e-default-rtdb.firebaseio.com",
      projectId: "kwitter-6488e",
      storageBucket: "kwitter-6488e.appspot.com",
      messagingSenderId: "487641760876",
      appId: "1:487641760876:web:9696ad22308b58b05c8449",
      measurementId: "G-1LGXZZVWEL"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 user_name= localStorage.getItem("user_name");
 room_name= localStorage.getItem("room_name");

 function send(){
       msg= document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             name: user_name,
             message: msg,
             like: 0
       });
       document.getElementById("msg").value= "";
 }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();